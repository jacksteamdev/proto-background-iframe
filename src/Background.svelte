<script lang="ts">
  import * as chromeApi from './chrome'

  const fns = Object.entries(chromeApi).filter(([key]) => key !== 'default')
</script>

<div class="root">
  {#each fns as [key, fn]}
    <button on:click={() => fn()}>{key}</button>
  {/each}
</div>

<style>
  .root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  button {
    display: block;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 0.25em;
  }
</style>
