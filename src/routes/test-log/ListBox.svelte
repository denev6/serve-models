<script>
  import { fade } from "svelte/transition";

  let { i, num } = $props();
</script>

<!-- built-in transition(in, out) -->
<div in:fade={{ duration: 500 }} class="log-container">
  Log {i + 1}: {num}
</div>

<style>
  .log-container {
    width: 100%;
    box-sizing: border-box;
    padding: 16px 8px;
    border-top: 1px solid var(--mid-gray);
  }
</style>
