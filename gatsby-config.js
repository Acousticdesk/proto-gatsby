module.exports = {
  siteMetadata: {
    siteUrl: 'https://awaitasync.com',
    title: 'awaitasync - read about your favorite developer tools',
    description: 'Find out more about the favorite developer tools you use everyday!',
    author: 'Andrii Kicha',
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
        url: 'http://ygd.dnp.mybluehost.me/graphql',
        html: {
          useGatsbyImage: false,
        },
      },
    },
  ],
}
