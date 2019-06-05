import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/agate.css'

export const { highlightAuto } = hljs

export default () => hljs.registerLanguage('javascript', javascript)
