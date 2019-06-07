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
            id
            title
            content
            slug
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
      path: '/svelte',
      component: require.resolve('./src/pages/gatsby.js'),
      context: {
        id: edge.node.id,
        title: edge.node.title,
        content: edge.node.content,
      },
    })
  })
}
