import { highlightBlock } from '../../highlight'

export const highlightCode = () => [...document.querySelectorAll('pre code').forEach(code => (
  highlightBlock(code)
))]
