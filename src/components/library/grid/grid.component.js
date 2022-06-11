import React from 'react'
import { Link } from 'gatsby'
import { SimpleGrid, LinkBox, Heading, LinkOverlay, Box, Flex, Icon } from '@chakra-ui/react';
import { Construction } from "@mui/icons-material"

import {
  usePosts, getPostPath, getPostTitle,
} from '../../post/utils'

const LibraryGrid = () => {
  const posts = usePosts()

  return (
    <SimpleGrid columns={[1, 3]} spacing={4}>
      {posts
        .sort((a, b) => Date.parse(b.node.date) - Date.parse(a.node.date))
        .map(post => (
          <LinkBox key={post.node.id} as='article' p='5' borderWidth='1px' rounded='md'>
            <Heading size='sm' my='2'>
              <Link
                to={getPostPath('uncategorised', post.node)}
              >
                <LinkOverlay>
                    <Flex>
                      <Icon as={Construction} mr={2} color="blue.300" />
                      <Box as="span">{getPostTitle(post.node)}</Box>
                    </Flex>
                </LinkOverlay>
              </Link>
            </Heading>
          </LinkBox>
        ))}
    </SimpleGrid>
  )
}

export default LibraryGrid
