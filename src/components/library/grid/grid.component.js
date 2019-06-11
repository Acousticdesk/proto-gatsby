import React from 'react'
import { path } from 'ramda'

import LibraryGridItem from './LibraryGridItem.component'

import { getEdgeCategory, usePosts, useCategories } from '../../post/utils'

const LibraryGrid = () => {
  const categories = useCategories()
  const posts = usePosts()

  return (
    <ul className="library-grid">
      {categories
        .filter(category => category.name !== 'other')
        .map(category => (
          <li>
            <h5>{category.name}</h5>
            <ul>
              {posts
                .filter(post => path(['slug'], getEdgeCategory(post)) === category.slug)
                .map(post => (
                  <LibraryGridItem
                    key={post.node.id}
                    category={getEdgeCategory(post)}
                    post={post.node}
                  />
                ))}
            </ul>
          </li>
        ))}
    </ul>
  )
}

export default LibraryGrid
