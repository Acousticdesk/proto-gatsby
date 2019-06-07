import { graphql, useStaticQuery } from 'gatsby'
import { pathOr } from 'ramda'

const FETCH_POSTS_QUERY = graphql`query {
   allWordpressPost {
    edges {
      node {
        id
        content
        slug
        title
      }
    }
  }
}`

export const useEdges = () => ({
  edges: pathOr([], ['allWordpressPost', 'edges'], useStaticQuery(FETCH_POSTS_QUERY)),
})
