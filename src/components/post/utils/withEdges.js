import { graphql, useStaticQuery } from 'gatsby'
import { pathOr } from 'ramda'

const FETCH_POSTS_QUERY = graphql`query {
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
}`

export const withEdges = () => ({
  edges: pathOr([], ['allMarkdownRemark', 'edges'], useStaticQuery(FETCH_POSTS_QUERY)),
})
