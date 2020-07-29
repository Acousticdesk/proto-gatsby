module.exports = {
  siteMetadata: {
    siteUrl: 'https://letconst.com',
    title: 'letconst - coding inspiration (react, svelte, css)',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-142558665-1',
        head: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-eslint',
    'gatsby-plugin-root-import',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'letconstwp.000webhostapp.com',
        protocol: 'https',
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false,
      },
    },
  ],
}
