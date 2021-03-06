module.exports = {
    pathPrefix: '/',
    siteMetadata: {
        siteUrl: 'ludwigfrank.com',
        author: 'Ludwig Frank',
        title: 'Ludwig Frank Portfolio',
        description: 'My Gatsby MDX Starter Project',
        keywords: [
            'Software Engineer',
            'Web Developer',
            'Consultant',
            'Freelancer',
        ],
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-132346393-1',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'articles',
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                displayName: true,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-catch-links',
        {
            resolve: `gatsby-mdx`,
            options: {
                extensions: ['.mdx'],
                defaultLayouts: {
                    default: require.resolve('./src/layouts/post-layout.js'),
                },
            },
        },
        { resolve: 'gatsby-remark-image-gallery' },
    ],
}
