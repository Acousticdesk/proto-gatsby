import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Layout from './layout'

const Category = ({ pageContext: { name, slug, posts = [] } }) => (
  <Layout>
    <h5>{name}</h5>
    <ul>
      {posts.map(p => (
        <li key={p.node.slug}>
          <Link
            to={`/${slug}/${p.node.slug}`}
          >
            {p.node.title}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Category.propTypes = {
  pageContext: PropTypes.shape(),
}

Category.defaultProps = {
  pageContext: {},
}

export default Category
