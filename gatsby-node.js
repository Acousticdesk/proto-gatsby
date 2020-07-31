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
      allWpPost {
        edges {
          node {
            title
            content
            slug
            excerpt
            comments {
              nodes {
                id
                content
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  const { allWpPost } = result.data

  allWpPost.edges.forEach((edge) => {
    createPage({
      path: `/uncategorised/${edge.node.slug}`,
      component: require.resolve('./src/components/post.js'),
      context: {
        title: edge.node.title,
        content: edge.node.content,
        excerpt: sanitizeHtml(edge.node.excerpt),
        comments: edge.node.comments.nodes,
      },
    })
  })
}
