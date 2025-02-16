<script>
  import { goto } from "$app/navigation";
</script>

<header></header>

<main>
  <!-- +page.svelte will be here -->
  <slot />
</main>

<footer>
  <a href="/">Home</a> |
  <a href="https://github.com/denev6/serve-models" target="_blank">Github</a>
</footer>

<style>
  footer {
    position: fixed;
    bottom: 0px;
    width: 100%;
    background-color: var(--light-gray);
    padding: 8px;
    margin-top: 32px;
    z-index: 10;
  }
  main {
    margin: 32px 16px;
    box-sizing: border-box;
    padding-bottom: 40px;
  }
</style>
