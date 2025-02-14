<script>
  import logo from "$lib/assets/sv.svg";
  const pages = [
    { url: "/api", label: "Internal API Server" },
    { url: "/api-result", label: "GET API when loading the page" },
    { url: "/test-log", label: "Example using Svelte features" },
    { url: "/elements", label: "Event-listener using Svelte elements" },
    { url: "/img-post", label: "External POST API: image" },
    { url: "/text-post", label: "External POST API: string" },
  ];
</script>

<main>
  <img src={logo} alt="logo" />
  <h1>Welcome to SvelteKit</h1>

  {#each pages as page}
    <p>
      <a href={page.url}>{page.label}</a>
    </p>
  {/each}
</main>

<style>
  img {
    width: 36px;
  }
</style>
