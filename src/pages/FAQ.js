import React from 'react'
import Layout from '../components/layout/index'

export default () => (
  <Layout>
    <div className="content__section">
      <h4 className="content__header">Q: I like the website. How can I help?</h4>
      <p>
        A: I would be very greatful if you could follow the link
        and land a like to letconst&apos;s Facebook page
        <span role="img" aria-label="red heart">❤️</span>
        {' '}
        <a href="https://facebook.com/letconst">letconst on Facebook</a>
      </p>
    </div>
  </Layout>
)
