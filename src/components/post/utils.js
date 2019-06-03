import { graphql, useStaticQuery } from 'gatsby'

const getPostFrontmatter = post => post.frontmatter

export const getPostTitle = post => getPostFrontmatter(post).title
export const getPostPath = post => getPostFrontmatter(post).path

export const fetchPosts = useStaticQuery(graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }`)
