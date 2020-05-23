import { highlightBlock } from 'highlight.js/lib/highlight'

export const highlightCode = () => {
  const codeBlocks = document.querySelectorAll('pre code')

  if (!codeBlocks) {
    return
  }

  Array.prototype.forEach.call(codeBlocks, code => (
    highlightBlock(code)
  ))
}
