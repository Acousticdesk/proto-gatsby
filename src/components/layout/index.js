import React from 'react'
import { Flex, Spacer, Container, Box } from '@chakra-ui/react'
import SocialMenu from '../social-menu/social-menu.component';

import { children as childrenDef } from '../../prop-types-defs'
import Logo from './logo'
import Meta from '../meta'
import { HeaderMenu, HeaderMenuMobile } from './header'

const GatsbyLayout = ({ children }) => (
  <Flex flexDirection="column" h="100vh">
    <Meta />
    <Box boxShadow="md">
      <Container>
        <Box py="4">
          <Flex bg="white">
            <Logo />
            <Spacer />
            <HeaderMenu />
            <HeaderMenuMobile />
            <Spacer display={['none', 'block']} />
            <Box display={['none', 'block']}>
              <SocialMenu />
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
    <Flex flexDirection="column" flexGrow={1} flexShrink={1} overflow="auto">
      <Container flexGrow={1} py={[0, 10]}>
        {children}
      </Container>
      <Box bg="gray.900" py={2}>
        <Container>
          <Flex>
            <Spacer />
            <SocialMenu iconColor="white" />
          </Flex>
        </Container>
      </Box>
    </Flex>
  </Flex>
)

GatsbyLayout.propTypes = {
  children: childrenDef.isRequired,
}

export default GatsbyLayout
