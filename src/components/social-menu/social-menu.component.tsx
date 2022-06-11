import { Box, Flex, Link } from "@chakra-ui/react"
import * as React from 'react';

const SocialMenu = ({ iconColor }) => (
  <Flex>
    {[{ href: 'https://facebook.com/letconst', icon: 'facebook' }, { href: 'https://t.me/letconst', icon: 'telegram' }].map(({ href, icon }, index, links) => {
    const mr = index + 1 === links.length ? 0 : 4;

    return (
      <Box key={href} mr={mr}>
      <Link href={href} isExternal>
        <Box as="span" color={iconColor} className="material-icons">{icon}</Box>
      </Link>
    </Box>
  )
  })}
  </Flex>
)

export default SocialMenu;
