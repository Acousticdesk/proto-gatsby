const sanitizeHtml = require('sanitize-html')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            title
            content
            slug
            categories {
              slug
            }
            excerpt
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  const { allWordpressPost } = result.data

  allWordpressPost.edges.forEach((edge) => {
    createPage({
      path: `/${edge.node.categories[0].slug}/${edge.node.slug}`,
      component: require.resolve('./src/components/post.js'),
      context: {
        title: edge.node.title,
        content: edge.node.content,
        excerpt: sanitizeHtml(edge.node.excerpt),
      },
    })
  })
}
