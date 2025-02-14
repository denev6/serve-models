<script>
  import { goto } from "$app/navigation";
</script>

<header></header>

<main>
  <!-- +page.svelte will be here -->
  <slot />
</main>

<footer>
  <button
    onclick={() => {
      goto("/");
    }}>Home</button
  >
</footer>

<style>
  footer {
    position: fixed;
    bottom: 0px;
    width: 100%;
    background-color: var(--light-gray);
    padding: 4px;
    margin-top: 32px;
    z-index: 10;
  }
  main {
    margin: 32px 16px;
    box-sizing: border-box;
    padding-bottom: 40px;
  }
</style>
