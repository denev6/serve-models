<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  export let data;
  const API_BASE_URL = data.apiUrl;

  let file;
  let fileUrl = "";
  let is_loading = false;

  /** Update when selected file is changed */
  function handleFileChange(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      file = selectedFile;
      fileUrl = URL.createObjectURL(file);
    }
  }

  /** Send API and redirect */
  async function uploadImage() {
    if (!file) {
      alert("Please select an image first.");
      return;
    }

    is_loading = true;

    // Image to FormData(request)
    const formData = new FormData();
    formData.append("image", file);

    try {
      // Fetch response from API
      const response = await fetch(API_BASE_URL + "/image", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to process image");

      // Response(image) to blob
      const blob = await response.blob();

      // Blob(image) to base64
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = () => {
        // Save in session storage
        sessionStorage.setItem(
          "img",
          JSON.stringify({
            image: reader.result,
            name: file.name,
          })
        );
        // Redirect
        goto("/img-post/result");
      };
    } catch (error) {
      alert(error);
    } finally {
      is_loading = false;
    }
  }
</script>

<h1>POST an Image</h1>
<input type="file" accept="image/*" onchange={handleFileChange} />
<button onclick={uploadImage} disabled={is_loading}
  >{is_loading ? "Processing..." : "Upload"}</button
>

{#if fileUrl}
  <div class="image-container">
    <div>
      <h3>Selected Image</h3>
      <img src={fileUrl} alt="" />
    </div>
  </div>
{/if}

<style>
  .image-container {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }
  img {
    max-width: 300px;
    border-radius: 10px;
  }
</style>
