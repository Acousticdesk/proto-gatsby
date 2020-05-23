import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/foundation.css'

export const init = () => hljs.registerLanguage('javascript', javascript)
