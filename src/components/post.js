import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Layout from './layout'
import { highlightCode } from '../services/codeSyntaxHighlight/index'

createHightlight()

const Post = ({ pageContext: { content, title, excerpt } }) => {
  useEffect(() => {
    highlightCode()
  }, [])
  return (
    <Layout>
      <Helmet>
        <title>
          {title}
          -
          letconst
        </title>
        <meta name="description" content={excerpt} />
        <link rel="canonical" href="https://letconst.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={excerpt} />
        <meta name="twitter:site" content="@letconstportal" />
        <meta name="twitter:creator" content="@letconstportal" />
      </Helmet>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

Post.propTypes = {
  pageContext: PropTypes.shape().isRequired,
}

export default Post
