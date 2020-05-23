import React from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.min.css'

import {
  Layout, Menu, Dropdown, Icon,
} from 'antd'

import { children as childrenDef } from '../../prop-types-defs'
import Logo from './logo'
import Meta from '../meta'
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import telegram from '../assets/telegram.svg'
import { HeaderMenu, SocialIcon } from './header'
import '../styles.css'

const LinkBlank = ({ href, children }) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
)

LinkBlank.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

const SocialMenu = () => (
  <Menu
    theme="dark"
    mode="horizontal"
    className="header__social-menu"
  >
    <Menu.Item>
      <LinkBlank href="https://facebook.com/letconst">
        <SocialIcon icon={facebook} title="facebook" />
      </LinkBlank>
    </Menu.Item>
    <Menu.Item>
      <LinkBlank href="https://twitter.com/letconstportal">
        <SocialIcon icon={twitter} title="twitter" />
      </LinkBlank>
    </Menu.Item>
    <Menu.Item>
      <LinkBlank href="https://t.me/letconst">
        <SocialIcon icon={telegram} title="telegram" />
      </LinkBlank>
    </Menu.Item>
  </Menu>
)

const GatsbyLayout = ({ children }) => (
  <>
    <Meta />
    <Layout.Header className="header">
      <Logo />
      <div className="header__menu-container">
        <HeaderMenu />
      </div>
      <SocialMenu />
      <Dropdown
        trigger="click"
        overlay={HeaderMenu}
        className="header__mobile-menu"
      >
        <button type="button" className="header__menu-button">
          <Icon
            type="menu"
            className="header__menu-icon"
          />
        </button>
      </Dropdown>
    </Layout.Header>
    <div className="app">
      {children}
    </div>
    <footer />
  </>
)

GatsbyLayout.propTypes = {
  children: childrenDef.isRequired,
}

export default GatsbyLayout
