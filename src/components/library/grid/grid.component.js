import React from 'react'
import { pipe } from 'ramda'

import LibraryGridItem from './LibraryGridItem.component'

import { getEdgeCategory, useEdges } from '../../post/utils'

const LibraryGrid = pipe(
  useEdges,
  ({ edges }) => (
    <ul className="library-grid">
      {edges.map(edge => (
        <LibraryGridItem
          key={edge.node.id}
          category={getEdgeCategory(edge)}
          post={edge.node}
        />
      ))}
    </ul>
  ),
)

export default LibraryGrid
