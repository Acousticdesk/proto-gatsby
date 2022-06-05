import { Link } from "gatsby"
import React from 'react'
import { Flex, Box, Text } from "@chakra-ui/react";

const HeaderMenu = () => (
  <Box display={['none', 'block']}>
    <Flex>
      {[{ to: '/about', text: 'About' }, { to: '/FAQ', text: 'FAQ' }].map(({ to, text }, index, links) => {
        const mr = index === links.length - 1 ? 0 : 6;

        return (
          <Text key={to} mr={mr}>
            <Link to={to}>{text}</Link>
          </Text>
        )
      })}
    </Flex>
  </Box>
)

export default HeaderMenu
