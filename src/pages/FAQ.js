import React from 'react'
import Layout from '../components/layout/index'
import { Heading, Text } from '@chakra-ui/react'

export default () => (
  <Layout>
    <Heading mb={5}>FAQ</Heading>
    <Heading size="sm">Q: I like your blog. How can I help?</Heading>
    <Text mt={2}>
      A: Please, contact me on Twitter or Facebook and share your feedback about AwaitAsync with me.
    </Text>
    <Text mt={2}>
      I would also appreciate if you would recommend me topics for my next articles. Thanks!
    </Text>
  </Layout>
)
