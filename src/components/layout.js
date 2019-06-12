import React from 'react'
import 'antd/dist/antd.min.css'
import { Layout, Menu } from 'antd'
import { Link } from 'gatsby'

import { children as childrenDef } from '../prop-types-defs'
import Logo from './layout/logo'
import Meta from './meta'
import './styles.css'

const GatsbyLayout = ({ children }) => (
  <>
    <Meta />
    <Layout.Header className="header">
      <Logo />
      <Menu
        theme="dark"
        mode="horizontal"
        className="header__menu"
      >
        <Menu.Item>
          <Link to="/about">О ресурсе</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/categories">Инструменты</Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
    <div className="post">
      {children}
    </div>
    <footer />
  </>
)

GatsbyLayout.propTypes = {
  children: childrenDef.isRequired,
}

export default GatsbyLayout
