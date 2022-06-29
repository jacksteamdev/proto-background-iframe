import Content from './Content.svelte'
import './content.css'

console.log('content script')

const html = `<aside class="crx-target"></aside>`
const div = new DOMParser().parseFromString(html, 'text/html').body
  .firstElementChild
document.body.append(div)

const target = div.attachShadow({ mode: 'open' })
new Content({ target })
