import React from 'react'
import { Link } from 'gatsby'
import { Menu, MenuButton, IconButton, MenuList, MenuItem, Box } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const HeaderMenuMobile = () => (
  <Box display={['block', 'none']}>
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='outline'
      />
      <MenuList>
        {[{ to: '/about', text: 'About' }, { to: '/FAQ', text: 'FAQ' }].map(({ to, text }) => {
          return (
            <MenuItem key={to}>
              <Box as={Link} to={to} w="100%">{text}</Box>
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  </Box>
)

export default HeaderMenuMobile
