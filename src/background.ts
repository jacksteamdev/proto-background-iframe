import Background from './Background.svelte'

console.log('background iframe')

const html = `<div id="crx-target"></div>`
const div = new DOMParser().parseFromString(html, 'text/html').body
  .firstElementChild
document.body.append(div)

const target = div.attachShadow({ mode: 'open' })
new Background({ target })
