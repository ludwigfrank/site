const path = require('path')
const { getImageSize, fluid } = require('gatsby-plugin-sharp')
const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope')

const PAGINATION_OFFSET = 2

const pluckCategories = edges =>
    Object.keys(
        edges.reduce((acc, value) => {
            value.node.fields.categories.forEach(category => {
                if (!acc[category]) {
                    acc[category] = category
                }
            })

            return acc
        }, {})
    )

const groupByCategory = edges =>
    edges.reduce((acc, value) => {
        value.node.fields.categories.forEach(category => {
            if (!acc[category]) {
                acc[category] = []
            }
            acc[category].push(value)
        })
        return acc
    }, {})

const createCategoryPages = (createPage, edges) => {
    const categories = pluckCategories(edges)

    const posts = groupByCategory(edges)

    Object.keys(posts).forEach(category => {
        createPaginatedPages(
            createPage,
            posts[category],
            `/categories/${category}`,
            {
                categories,
                activeCategory: category,
            }
        )
    })
}

const createPosts = (createPage, edges, imageData) => {
    edges.forEach(({ node }, i) => {
        const prev = i === 0 ? null : edges[i - 1].node
        const next = i === edges.length - 1 ? null : edges[i + 1].node
        const meta = node.exports.meta
        createPage({
            path: meta.slug,
            component: componentWithMDXScope(
                path.resolve(`./src/layouts/article-layout.js`),
                node.code.scope,
                __dirname
            ),
            context: {
                id: node.id,
                prev,
                next,
                imageData: imageData,
            },
        })
    })
}

const createBlog = (createPage, edges) => {
    const categories = pluckCategories(edges)

    createPaginatedPages(createPage, edges, '/blog', {
        categories,
    })
}

const createPaginatedPages = (createPage, edges, pathPrefix, context) => {
    const pages = edges.reduce((acc, value, index) => {
        const pageIndex = Math.floor(index / PAGINATION_OFFSET)

        if (!acc[pageIndex]) {
            acc[pageIndex] = []
        }

        acc[pageIndex].push(value.node.id)

        return acc
    }, [])

    pages.forEach((page, index) => {
        const previousPagePath = `${pathPrefix}/${index + 1}`
        const nextPagePath =
            index === 1 ? pathPrefix : `${pathPrefix}/${index - 1}`

        createPage({
            path: index > 0 ? `${pathPrefix}/${index}` : `${pathPrefix}`,
            component: path.resolve(`src/layouts/article-layour.js`),
            context: {
                pagination: {
                    page,
                    nextPagePath: index === 0 ? null : nextPagePath,
                    previousPagePath:
                        index === pages.length - 1 ? null : previousPagePath,
                    pageCount: pages.length,
                    pathPrefix,
                },
                ...context,
            },
        })
    })
}

const generateImages = async function(files) {
    const defaults = {
        maxWidth: 1200,
        wrapperStyle: ``,
        backgroundColor: `white`,
        linkImagesToOriginal: true,
        showCaptions: false,
        pathPrefix,
        withWebp: false,
    }

    let fluidResult = await fluid({
        file: files.edges[0].absolutePath,
        args: defaults,
    })
}

exports.createPages = ({ actions, graphql, files, reporter, cache }) => {
    console.log(JSON.stringify(files))
    return graphql(`
        query {
            allFile(filter: { extension: { in: "jpg" } }) {
                edges {
                    node {
                        id
                        name
                        relativePath
                        relativeDirectory
                        extension
                        absolutePath
                        internal {
                            contentDigest
                        }
                    }
                }
            }
            allMdx(sort: { order: DESC, fields: [exports___meta___date] }) {
                edges {
                    node {
                        id
                        excerpt(pruneLength: 250)
                        exports {
                            meta {
                                title
                                date
                                slug
                                categories
                            }
                        }
                        code {
                            scope
                        }
                    }
                }
            }
        }
    `).then(({ data, errors }) => {
        if (errors) {
            return Promise.reject(errors)
        }

        const defaults = {
            maxWidth: 650,
            wrapperStyle: ``,
            backgroundColor: `white`,
            linkImagesToOriginal: true,
            showCaptions: false,
            withWebp: false,
        }

        const imageData = Promise.all(
            data.allFile.edges.map(image => {
                return fluid({
                    file: image.node,
                    args: defaults,
                    reporter,
                    cache,
                }).then(res => {
                    return {
                        ...res,
                        name: image.node.name,
                        relativeDirectory: image.node.relativeDirectory,
                    }
                })
            })
        )

        imageData.then(resolvedImageData => {
            const { edges } = data.allMdx
            createPosts(actions.createPage, edges, resolvedImageData)
        })
    })
}

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
            alias: {
                $components: path.resolve(__dirname, 'src/components'),
                $images: path.resolve(__dirname, 'src/images'),
            },
        },
    })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === `Mdx`) {
        const parent = getNode(node.parent)

        createNodeField({
            name: 'id',
            node,
            value: node.id,
        })

        createNodeField({
            name: 'title',
            node,
            value: node.frontmatter.title,
        })

        createNodeField({
            name: 'description',
            node,
            value: node.frontmatter.description,
        })

        createNodeField({
            name: 'slug',
            node,
            value: node.frontmatter.slug,
        })

        createNodeField({
            name: 'date',
            node,
            value: node.frontmatter.date || '',
        })

        createNodeField({
            name: 'banner',
            node,
            banner: node.frontmatter.banner,
        })

        createNodeField({
            name: 'categories',
            node,
            value: node.frontmatter.categories || [],
        })

        createNodeField({
            name: 'keywords',
            node,
            value: node.frontmatter.keywords || [],
        })
    }
}
