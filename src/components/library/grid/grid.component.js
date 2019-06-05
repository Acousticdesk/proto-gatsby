import React from 'react'
import { pipe } from 'ramda'

import LibraryGridItem from './LibraryGridItem.component'

import { withEdges } from '../../post/utils'

const LibraryGrid = pipe(
  withEdges,
  ({ edges }) => (
    <ul className="library-grid">
      {edges.map(edge => <LibraryGridItem key={edge.node.id} post={edge.node} />)}
    </ul>
  ),
)

export default LibraryGrid
