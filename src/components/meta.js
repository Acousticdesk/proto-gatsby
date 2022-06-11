/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react'
import Helmet from 'react-helmet'
import favicon from './assets/favicon.ico';

export default () => (
  <Helmet>
    <title>AwaitAsync - Fresh Software Development Blog</title>
    <meta name="description" content="React, Node.js, Docker, Cloud Computing, Algorithms and Datastructures. Learn more about popular technical topics in software development." />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="shortcut icon" href={favicon} type="image/x-icon" />
  </Helmet>
)
