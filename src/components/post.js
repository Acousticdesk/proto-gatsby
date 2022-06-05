import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Container } from '@chakra-ui/react'
import 'highlight.js/styles/github.css'
import hljs from 'highlight.js'
import Layout from './layout/index'

const Post = ({
  pageContext: {
    content, title, excerpt,
  },
}) => {
  useEffect(() => {
    hljs.highlightAll()
  }, [])
  return (
    <Layout>
      <Helmet>
        <title>
          {title}
          -
          AwaitAsync
        </title>
        <meta name="description" content={excerpt} />
        <link rel="canonical" href="https://awaitasync.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={excerpt} />
      </Helmet>
      <Container maxW={['container.sm', 'container.md']} className="post">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Container>
    </Layout>
  )
}

Post.propTypes = {
  pageContext: PropTypes.shape().isRequired,
}

export default Post
