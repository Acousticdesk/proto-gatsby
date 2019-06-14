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

  const categories = await graphql(`
    {
      allWordpressCategory {
        edges {
          node {
            slug
            name
          }
        }
      }
    }
  `)

  if (categories.errors) {
    throw new Error(categories.errors)
  }

  const { allWordpressCategory } = categories.data

  createPage({
    path: '/categories',
    component: require.resolve('./src/components/categories.js'),
    context: {
      categories: allWordpressCategory.edges,
    },
  })

  allWordpressCategory.edges.forEach((c) => {
    createPage({
      path: `/category/${c.node.slug}`,
      component: require.resolve('./src/components/category.js'),
      context: {
        name: c.node.name,
        slug: c.node.slug,
        posts: allWordpressPost.edges.filter(e => e.node.categories[0].slug === c.node.slug),
      },
    })
  })
}
