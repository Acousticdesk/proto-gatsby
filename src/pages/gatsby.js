import React from 'react'

import Layout from '../components/post/layout'
import { highlightCode } from '../components/code/utils'

const codeSample = `
  export { useStaticQuery } from 'gatsby'
  export Layout from '../components/layout'
  
  export default () => (
    <Layout>
        Hello from Gatsby!
    </Layout>
  )
`

// TODO: investigate other code highlighters
export default () => (
  <Layout>
    <pre>
      <code
        className="hljs"
        dangerouslySetInnerHTML={{ __html: highlightCode(codeSample) }}
      />
    </pre>
  </Layout>
)
