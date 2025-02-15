<script>
  import logo from "$lib/assets/sv.svg";
  const productPages = [
    { url: "/mobilenet", label: "Predict image labels with MobileNet" },
  ];
  const testPages = [
    { url: "/test/api-result", label: "GET API when loading the page" },
    { url: "/test/log", label: "Example using Svelte features" },
    { url: "/test/elements", label: "Event-listener using Svelte elements" },
    { url: "/test/img-post", label: "External POST API: image" },
    { url: "/test/text-post", label: "External POST API: string" },
  ];
</script>

<main>
  <img src={logo} alt="logo" />
  <h1>Welcome to SvelteKit</h1>

  <h2>Production Page</h2>
  {#each productPages as productPage}
    <p>
      <a href={productPage.url}>{productPage.label}</a>
    </p>
  {/each}

  <h2>Test Page</h2>
  {#each testPages as testPage}
    <p>
      <a href={testPage.url}>{testPage.label}</a>
    </p>
  {/each}
</main>

<style>
  img {
    width: 36px;
  }
</style>
