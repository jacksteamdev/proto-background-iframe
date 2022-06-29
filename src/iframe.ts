import Iframe from './Iframe.svelte'

console.log('iframe extension page')

const html = `<div id="crx-target"></div>`
const div = new DOMParser().parseFromString(html, 'text/html').body
  .firstElementChild
document.body.append(div)

const target = div.attachShadow({ mode: 'open' })
new Iframe({ target })
