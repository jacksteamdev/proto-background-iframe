/* ----------------- CHROME EVENTS ----------------- */

chrome.tabs.onCreated.addListener((tab) => {
  console.log('created tab', tab)
})

chrome.runtime.onMessage.addListener((message, sender) => {
  console.log('message', { message, sender })
})

/* --------------- CHROME API METHODS -------------- */

export async function createTab() {
  return chrome.tabs.create({ url: 'https://duckduckgo.com' })
}

export async function queryTab() {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  })

  console.log('queried tab', tab)
}
