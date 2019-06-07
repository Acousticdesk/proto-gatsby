import React from 'react'
import { children as childrenDef } from '../prop-types-defs'

import './layout.css'
import './styles.css'

const Layout = ({ children }) => (
  <>
    <header />
    <div className="post">
      {children}
    </div>
    <footer />
  </>
)

Layout.propTypes = {
  children: childrenDef.isRequired,
}

export default Layout
