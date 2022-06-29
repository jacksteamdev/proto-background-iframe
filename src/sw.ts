export {}

console.log('service worker')

chrome.system.display.onDisplayChanged.addListener(() => {
  console.log('display changed')
})

chrome.idle.onStateChanged.addListener((state) => {
  console.log('idle state changed', state)
})
