<script lang="ts">
  const iframeSrc = chrome.runtime.getURL('/src/background.html')
  function sendMessage() {
    chrome.runtime.sendMessage({ type: 'hello' })
  }
</script>

<div class="root">
  <h3>Content Script</h3>
  <button on:click={sendMessage}>Send Message to Background</button>
  <iframe src={iframeSrc} title="background iframe" />
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
</style>
