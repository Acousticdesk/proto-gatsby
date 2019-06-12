import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Categories = ({ pageContext: { categories = [] } }) => (
  <Layout>
    {categories.filter(c => c.node.name !== 'other').map(c => (
      <Link
        key={c.node.slug}
        to={`/category/${c.node.slug}`}
      >
        {c.node.name}
      </Link>
    ))}
  </Layout>
)

Categories.propTypes = {
  pageContext: PropTypes.shape(),
}

Categories.defaultProps = {
  pageContext: {},
}

export default Categories
