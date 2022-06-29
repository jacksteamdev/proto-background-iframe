/* ----------------- CHROME EVENTS ----------------- */

chrome.runtime.onMessage.addListener((message, sender) => {
  console.log('message', { message, sender })
})

chrome.tabs.onUpdated.addListener((tab) => {
  console.log('updated tab', tab)
})

chrome.storage.onChanged.addListener((changes) => {
  console.log('storage changed', changes)
})

chrome.commands.onCommand.addListener((command) => {
  console.log('command', command)
})

chrome.webNavigation.onHistoryStateUpdated.addListener((change) => {
  console.log('iframe web nav', change)
})

chrome.system.display.onDisplayChanged.addListener(() => {
  console.log('display changed')
})

chrome.idle.onStateChanged.addListener((state) => {
  console.log('idle state changed', state)
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

export async function pinTab() {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  })

  return chrome.tabs.update(tab.id, { pinned: true })
}
