import { pathOr } from 'ramda'
import { fetchPosts } from '../../post/utils'

export default () => ({
  edges: pathOr([], ['allMarkdownRemark', 'edges'], fetchPosts()),
})
