import { graphql, useStaticQuery } from 'gatsby'
import { pathOr } from 'ramda'

const FETCH_POSTS_QUERY = graphql`query {
   allWordpressPost {
    edges {
      node {
        content
        slug
        title
        categories {
          slug
        }
      }
    }
  }
}`

export const usePosts = () => pathOr([], ['allWordpressPost', 'edges'], useStaticQuery(FETCH_POSTS_QUERY))
