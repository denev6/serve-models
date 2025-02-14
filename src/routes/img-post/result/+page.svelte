<script>
  import { onMount } from "svelte";

  let processedImage = $state("");
  let fileName = $state("");

  onMount(() => {
    // Parse image from session storage
    let response = JSON.parse(sessionStorage.getItem("img"));
    if (response) {
      processedImage = response.image;
      fileName = response.name;
    }
  });
</script>

<h1>Processed Image</h1>
{#if processedImage}
  <p>{fileName}</p>
  <img src={processedImage} alt="" />
{:else}
  <p>Fail to parse the result</p>
{/if}

<style>
  img {
    width: 300px;
  }
</style>
