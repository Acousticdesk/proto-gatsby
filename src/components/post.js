import React, { useEffect } from 'react'
import { Link } from 'gatsby';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Container, Flex, Spacer, Box } from '@chakra-ui/react'
import 'highlight.js/styles/github.css'
import hljs from 'highlight.js'
import Layout from './layout/index'

const Post = ({
  pageContext: {
    content, title, excerpt, previousPost, previousPostTitle, nextPost, nextPostTitle
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
      <Container>
        <Flex mt={16} mb={5} flexDirection={['column', 'row']}>
          {previousPost && (
            <Flex maxW={['100%', '40%']}>
              <Box as="span" className="material-icons" mr={2} color="blue.500">arrow_back</Box>
              {previousPost && <Box as={Link} to={previousPost} color="blue.500">{previousPostTitle}</Box>}
            </Flex>
          )}
          <Spacer display={['none', 'block']} />
          {nextPost && (
            <Flex mt={[7, 0]} maxW={['100%', '40%']}>
              <Box as={Link} to={nextPost} color="blue.500">{nextPostTitle}</Box>
              <Box as="span" className="material-icons" ml={2} color="blue.500">arrow_forward</Box>
            </Flex>
          )}
        </Flex>
      </Container>
    </Layout>
  )
}

Post.propTypes = {
  pageContext: PropTypes.shape().isRequired,
}

export default Post
