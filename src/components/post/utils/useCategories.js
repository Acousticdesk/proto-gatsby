import { graphql, useStaticQuery } from 'gatsby'
import { pathOr } from 'ramda'

const FETCH_POSTS_QUERY = graphql`query {
   allWordpressCategory {
    nodes {
     name
     slug
    }
  }
}`

export const useCategories = () => pathOr([], ['allWordpressCategory', 'nodes'], useStaticQuery(FETCH_POSTS_QUERY))
