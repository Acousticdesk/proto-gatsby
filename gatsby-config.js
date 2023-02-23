module.exports = {
  siteMetadata: {
    siteUrl: 'https://awaitasync.com',
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
        url: 'https://ygd.dnp.mybluehost.me/graphql',
        debug: {
          preview: true,
          graphql: {
            showQueryOnError: true
          }
        },
        html: {
          useGatsbyImage: false,
        },
      },
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'material icons',
        ],
      }
    }
  ],
}
