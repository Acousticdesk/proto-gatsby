import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/foundation.css'

// dark.css

// default.css
// foundation.css

// googlecode.css
export const { highlightBlock } = hljs

export default () => hljs.registerLanguage('javascript', javascript)
