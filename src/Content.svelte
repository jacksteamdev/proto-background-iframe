<script lang="ts">
  function sendMessage() {
    chrome.runtime.sendMessage({ type: 'hello' })
  }
  async function incrementStorage() {
    const { count } = await chrome.storage.local.get({ count: 0 })
    return chrome.storage.local.set({ count: count + 1 })
  }

  const iframeSrc = chrome.runtime.getURL('/src/iframe.html')
</script>

<div class="root">
  <h3>Content Script</h3>
  <button on:click={sendMessage}>Send Message to Iframe</button>
  <button on:click={incrementStorage}>Increment storage</button>
  <iframe src={iframeSrc} title="iframe extension page" />
</div>

<style>
  .root {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  }

  button {
    display: block;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 0.25em;
  }

  iframe {
    height: 200px;
  }
</style>
