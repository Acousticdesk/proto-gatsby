import { Box, Flex, Icon, Link } from "@chakra-ui/react"
import { Facebook, Telegram, Twitter } from "@mui/icons-material"
import * as React from 'react';

const SocialMenu = ({ iconColor }) => (
  <Flex>
    {[{ href: 'https://facebook.com/letconst', icon: Facebook }, { href: 'https://twitter.com/letconstportal', icon: Twitter }, { href: 'https://t.me/letconst', icon: Telegram }].map(({ href, icon }, index, links) => {
    const mr = index + 1 === links.length ? 0 : 4;

    return (
      <Box key={href} mr={mr}>
      <Link href={href} isExternal>
        <Icon as={icon} color={iconColor} />
      </Link>
    </Box>
  )
  })}
  </Flex>
)

export default SocialMenu;
