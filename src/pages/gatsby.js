import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/post/layout'
import { highlightCode } from '../components/code/utils'

const Gatsby = ({ pageContext: { content } }) => {
  useEffect(() => {
    highlightCode()
  }, [])
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

Gatsby.propTypes = {
  pageContext: PropTypes.shape().isRequired,
}

export default Gatsby
