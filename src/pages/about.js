import React from 'react'
import Layout from '../components/layout/index'
import { Heading, Link, Text, Box } from '@chakra-ui/react'

export default () => (
  <Layout>
    <Heading>About AwaitAsync</Heading>

    <Box maxW={['container.sm', 'container.md']}>
      <Text mt={10}>Dear Friend,</Text>

      <Text mt={6}>
        Welcome! It is great to see you on AwaitAsync.
      </Text>

      <Text mt={6}>
        My name is Andrii Kicha. I am a software engineer from 🇺🇦.
        Currently I work at <Link href="https://star.global" isExternal>Star</Link>, and have more than 7 years of experience working as a software engineer.
      </Text>
      <Text mt={6}>
        AwaitAsync is my personal project. This is my blog where I share my experience of working with popular tools in the Web Development and Hybrid App Development communities.
        The tools include, but are not limited to React, Node.js, Docker, Cloud Computing Services, Flutter and other.
      </Text>
      <Text mt={6}>Please, join me in my technical journey. I am sure that we will learn a lot of interesting techniques and concepts along the way.</Text>
      <Text mt={6}>Looking forward to sharing the latest articles with you.</Text>
      <Text mt={6}>I wish you all the best,</Text>
      <Text>Andrii Kicha</Text>
    </Box>
  </Layout>
)
