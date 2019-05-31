import React from 'react'
import PropTypes from 'prop-types'

import LibraryGridItem from './LibraryGridItem.component'

const LibraryGrid = ({ edges }) => (
  <ul className="library-grid">
    {edges.map(edge => <LibraryGridItem key={edge.node.id} post={edge.node} />)}
  </ul>
)

LibraryGrid.propTypes = {
  edges: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default LibraryGrid
