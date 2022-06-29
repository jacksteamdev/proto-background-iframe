# Prototype of Background Iframe

If your extension has a portal tab which must always be open for the extension to function, you may not need an extensive background service worker.

## Development

Run `pnpm dev`, install `./dist` in the browser extensions dashboard, and open [Google](https://www.google.com).

A content script will inject an iframe into the middle of the tab. This iframe contains an extension page which has access to most of the same Chrome API as the background page.

![screenshot](screenshot.png)

### Advantages

1. Unlike a service worker, this is a persistent environment, as long as the portal is open, the iframe environment exists.
2. The iframe document has access to the Chrome API.
3. The iframe document has access to DOM related APIs.
4. The extension service worker can be much smaller.

### Differences

1. If the portal tab is closed (Google in this case), then the extension will behave as if it is disabled.
   1. The service worker can listen for the portal tab to be closed and notify existing content scripts.
2. Certain Chrome APIs won't work, e.g., install events.
