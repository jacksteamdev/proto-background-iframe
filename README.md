# Prototype of Background Iframe

If your extension has a portal tab that must always be open for the extension to function, you may not need an extensive background service worker.

## Development

Run `pnpm dev`, install `./dist` in the browser extensions dashboard, and open [Google](https://www.google.com).

A content script will inject an iframe into the middle of the tab. This iframe contains an extension page with access to most of the same Chrome API as the background page.

![screenshot](screenshot.png)

You should hide this element (`display: none`) in an actual implementation.

### Advantages

1. Unlike a service worker, this is a persistent environment; as long as the portal is open, the iframe environment exists.
2. The iframe document has access to the Chrome API.
3. The iframe document has access to DOM-related APIs.
4. The extension service worker can be much smaller, thus lighter to load.

### Differences

1. If the portal tab is closed (Google in this case), the extension will behave as if it is disabled.
   1. The service worker can listen for the portal tab to be closed and notify existing content scripts.
   2. Pin the tab to remove the close button.
2. If the portal tab reloads, the background iframe will reload.
   1. Make the portal a PWA (no reload button)
   2. Warn the user when they try to reload.
3. Certain Chrome APIs won't work.
   1. Install events would fire before the portal could open.
   2. [Blocking Web Request (not available in MV3)](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/#when-use-blocking-webrequest). The replacement is `declarativeNetRequest`.
4. The extension page doesn't exist when the portal tab opens.
   1. Iframe should announce when it is available.
   2. Portal tab should listen for the iframe announcement.
