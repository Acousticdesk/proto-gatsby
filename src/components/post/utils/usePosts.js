import { graphql, useStaticQuery } from 'gatsby'
import { pathOr } from 'ramda'

const FETCH_POSTS_QUERY = graphql`query {
   allWpPost {
    edges {
      node {
        content
        slug
        title
        date
        categories {
          nodes {
            slug
          }
        }
      }
    }
  }
}`

export const usePosts = () => pathOr([], ['allWpPost', 'edges'], useStaticQuery(FETCH_POSTS_QUERY))
