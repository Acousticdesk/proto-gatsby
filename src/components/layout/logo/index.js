import React from 'react'
import { Link } from 'gatsby'

import { Typography } from 'antd'

import './styles.css'

export default () => (
  <Typography.Title
    className="logo"
    level={5}
  >
    <Link to="/">letconst</Link>
  </Typography.Title>
)
