import React from 'react'
import { Link } from 'gatsby'
import { Text } from '@chakra-ui/react';

export default function Logo() {
  return (
    <Link to="/">
      <Text fontSize="xl" fontWeight="medium">AwaitAsync</Text>
    </Link>
  )
}
