const path = require('path')
const fs = require(`fs-extra`)

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
            alias: {
                $components: path.resolve(__dirname, 'src/components'),
                $theme: path.resolve(__dirname, 'src/theme'),
                $images: path.resolve(__dirname, 'src/images'),
            },
        },
    })
}

exports.onPreBuild = props => {
    console.log(props)
}

exports.onPreExtractQueries = async ({ store, getNodesByType }) => {
    const program = store.getState().program

    // Check if there are any ImageSharp nodes. If so add fragments for ImageSharp.
    // The fragment will cause an error if there are no ImageSharp nodes.
    if (getNodesByType(`ImageSharp`).length == 0) {
        return
    }

    const file = await fs.readFile(`./static/fragments.js`)

    /* const images = await fs.readdir('./src/pages/articles/us-iran/images')
    images.map(image => {
        const p = `
        ${image
            .split('.')
            .slice(0, -1)
            .join('.')}: file(
            relativePath: { eq: "articles/us-iran/images/${image}" }
        ) {
            childImageSharp {
                fluid(maxWidth: 1400, quality: 80) {
                    ...DefaultImage
                }
            }
        }
        `
        if (!image.includes('cover')) {
            console.log(p)
        }
    }) */

    // We have ImageSharp nodes so let's add our fragments to .cache/fragments.
    await fs.appendFile(
        `${program.directory}/.cache/fragments/image-sharp-fragments.js`,
        file
    )
}

exports.onCreateNode = ({ node, getNode, actions, ...props }) => {
    const { createNodeField } = actions

    if (node.internal.type === `Mdx`) {
        const parent = getNode(node.parent)
        createNodeField({
            name: 'id',
            node,
            value: node.id,
        })

        createNodeField({
            name: 'coverImg',
            node,
            value: node.frontmatter.coverImg,
        })

        createNodeField({
            name: 'title',
            node,
            value: node.frontmatter.title,
        })

        createNodeField({
            name: 'team',
            node,
            value: node.frontmatter.team,
        })

        createNodeField({
            name: 'exports',
            node,
            value: node.exports,
        })

        createNodeField({
            name: 'description',
            node,
            value: node.frontmatter.description,
        })

        createNodeField({
            name: 'time',
            node,
            value: node.frontmatter.time,
        })

        createNodeField({
            name: 'client',
            node,
            value: node.frontmatter.client,
        })

        createNodeField({
            name: 'role',
            node,
            value: node.frontmatter.role,
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

        createNodeField({
            name: 'priority',
            node,
            banner: node.frontmatter.priority,
        })
    }
}
