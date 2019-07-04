import React from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.min.css'

import {
  Layout, Menu, Dropdown, Icon,
} from 'antd'
import { Link } from 'gatsby'

import { children as childrenDef } from '../prop-types-defs'
import Logo from './layout/logo'
import Meta from './meta'
import twitter from './assets/twitter.svg'
import facebook from './assets/facebook.svg'
import telegram from './assets/telegram.svg'
import './styles.css'

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

const SocialIcon = ({ icon, title }) => (
  <img
    className="social-icon__img"
    src={icon}
    alt={`${title} icon`}
  />
)

SocialIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

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
