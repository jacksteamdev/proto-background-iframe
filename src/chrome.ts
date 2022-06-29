export async function createTab() {
  return chrome.tabs.create({ url: 'https://merlyn.org' })
}
