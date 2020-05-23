import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Layout from './layout/index'

const Categories = ({ pageContext: { categories = [] } }) => (
  <Layout>
    {categories.filter(c => c.node.name !== 'other').map(c => (
      <div>
        <Link
          className="categories__link"
          key={c.node.slug}
          to={`/category/${c.node.slug}`}
        >
          {c.node.name}
        </Link>
      </div>
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
