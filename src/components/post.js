import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Layout from './layout/index'
import { highlightCode } from '../services/codeSyntaxHighlight/index'

const Post = ({
  pageContext: {
    content, title, excerpt, comments,
  },
}) => {
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
      <h4>Comments:</h4>
      {comments.map(
        (
          { node: { author_name: authorName, content: commentContent, wordpress_id: wordpressId } },
        ) => (
          <div key={wordpressId} className="Comment">
            <h5>{authorName}</h5>
            <div>{commentContent}</div>
          </div>
        ),
      )}
    </Layout>
  )
}

Post.propTypes = {
  pageContext: PropTypes.shape().isRequired,
}

export default Post
