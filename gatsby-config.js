module.exports = {
  siteMetadata: {
    siteUrl: 'https://letconst.com',
    title: 'letconst - coding inspiration (react, svelte, css)',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-eslint',
    'gatsby-transformer-remark',
    'gatsby-plugin-root-import',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'unsalvageable-hardc.000webhostapp.com',
        protocol: 'https',
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false,
      },
    },
    'gatsby-plugin-sitemap',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
