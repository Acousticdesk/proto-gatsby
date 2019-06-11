import {
  path, defaultTo, head, pipe,
} from 'ramda'

export const getPostTitle = post => post.title
export const getEdgeCategory = pipe(
  edge => path(['node', 'categories'], edge),
  defaultTo([]),
  head,
)
export const getPostPath = (category, post) => `${category.slug}/${post.slug}`
