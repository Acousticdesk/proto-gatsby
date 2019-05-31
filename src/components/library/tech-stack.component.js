import React from 'react'
import PropTypes from 'prop-types'

import LibraryGrid from './grid/grid.component'

const TechStack = ({ edges }) => (
  <>
    <h1>Tech Stack</h1>
    <LibraryGrid edges={edges} />
  </>
)

TechStack.propTypes = {
  edges: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TechStack
