/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react'
import Helmet from 'react-helmet'

export default () => (
  <Helmet>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-142558665-1" />
    <script>
      {`
        window.dataLayer = window.dataLayer || [];
        const gtag = () => {
          window.dataLayer.push(arguments)
        };
        gtag('js', new Date());

        gtag('config', 'UA-142558665-1');
      `}
    </script>

    <title>letconst - web inspiration</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="google-site-verification" content="isIs2HhCzxV5jdc0Na1-2Ke5H64kgvSA3Q-DQGJn3Gg" />

    <link rel="shortcut icon" href="./assets/favicon.ico" type="image/x-icon" />
  </Helmet>
)
