import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import { highlightCode } from '../components/code/utils'

const Gatsby = ({ pageContext: { content, title } }) => {
  useEffect(() => {
    highlightCode()
  }, [])
  return (
    <Layout>
      <h1>{title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Layout>
  )
}

Gatsby.propTypes = {
  pageContext: PropTypes.shape().isRequired,
}

export default Gatsby
