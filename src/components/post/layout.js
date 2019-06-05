import React from 'react'
import { children as childrenDef } from '../../prop-types-defs'

const Layout = ({ children }) => (
  <>
    <header>Prototype</header>
    {children}
  </>
)

Layout.propTypes = {
  children: childrenDef.isRequired,
}

export default Layout
