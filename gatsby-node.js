const path = require('path')

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

const generateSlug = path => {
    const arr = path.split('/')
    arr.pop()
    return arr.slice(arr.indexOf('articles')).join('/')
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
    }
}
