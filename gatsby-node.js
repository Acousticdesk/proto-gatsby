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

  allWpPost.edges.sort((a, b) => Date.parse(b.node.date) - Date.parse(a.node.date)).forEach((edge, index, allEdges) => {
    const previousPost = allEdges[index - 1]?.node;
    const nextPost = allEdges[index + 1]?.node;

    createPage({
      path: `/uncategorised/${edge.node.slug}`,
      component: require.resolve('./src/components/post.js'),
      context: {
        title: edge.node.title,
        content: edge.node.content,
        excerpt: sanitizeHtml(edge.node.excerpt),
        comments: edge.node.comments.nodes,
        previousPost: previousPost ? `/uncategorised/${previousPost.slug}` : null,
        previousPostTitle: previousPost?.title,
        nextPost: nextPost ? `/uncategorised/${nextPost.slug}` : null,
        nextPostTitle: nextPost?.title
      },
    })
  })
}
