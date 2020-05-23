import React from 'react'
import { Menu } from 'antd'
import { Link } from 'gatsby'

const HeaderMenu = () => (
  <Menu
    theme="dark"
    mode="horizontal"
    className="header__menu"
  >
    <Menu.Item className="header__menu-item">
      <Link to="/about">About</Link>
    </Menu.Item>
    <Menu.Item className="header__menu-item">
      <Link to="/FAQ">FAQ</Link>
    </Menu.Item>
    <Menu.Item className="header__menu-item">
      <Link to="/categories">Instruments</Link>
    </Menu.Item>
  </Menu>
)

export default HeaderMenu
