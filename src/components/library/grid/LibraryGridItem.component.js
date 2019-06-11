import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

// TODO: how to use absolute imports
import { getPostTitle, getPostPath } from '../../post/utils'

const LibraryGridItem = ({ post, category }) => (
  <li className="library-grid__item">
    <Link to={getPostPath(category, post)}>{getPostTitle(post)}</Link>
  </li>
)

LibraryGridItem.propTypes = {
  post: PropTypes
    .shape({
      title: PropTypes.string,
    })
    .isRequired,
  category: PropTypes.string.isRequired,
}

export default LibraryGridItem
