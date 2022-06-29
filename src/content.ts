import './content.css'

console.log('content')

const iframeSrc = chrome.runtime.getURL('/src/background.html')
const html = `<aside id="crx-target"><iframe src=${iframeSrc}></iframe></aside>`
const div = new DOMParser().parseFromString(html, 'text/html').body
  .firstElementChild
document.documentElement.append(div)

export {}
