<script>
  import { API_BASE_URL } from "$lib/constants";

  let file;
  let fileUrl = "";
  let is_loading = false;
  let is_predicted = false;
  let probs = new Array(10).fill(0);

  function handleFileChange(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      is_predicted = false;
      file = selectedFile;
      fileUrl = URL.createObjectURL(file);
    } else {
      file = "";
      fileUrl = "";
    }
  }

  async function uploadImage() {
    if (!file) {
      alert("Please select an image first.");
      return;
    }

    is_loading = true;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${API_BASE_URL}/fashion-mnist`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to process image");
      const prediction = await response.json();
      probs = prediction.probs;

      is_predicted = true;
    } catch (error) {
      alert(error);
    } finally {
      is_loading = false;
    }
  }

  function clipOpacity(prob, min = 0.2) {
    if (prob < min) {
      return min;
    }
    return prob;
  }

  const labels = [
    "T-shirt/top",
    "Trouser",
    "Pullover",
    "Dress",
    "Coat",
    "Sandal",
    "Shirt",
    "Sneaker",
    "Bag",
    "Ankle boot",
  ];
</script>

<h1>Predict Image Labels</h1>

{#if is_predicted}
  <div id="label-container">
    {#each labels as label, idx}
      <div class="label-box" style:opacity={clipOpacity(probs[idx])}>
        {label}: {(probs[idx] * 100).toFixed(2)}%
      </div>
    {/each}
  </div>
{:else}
  Lables are [ {labels.join(", ")} ] (Fashion MNIST).
{/if}

<div id="floating-box">
  {#if fileUrl && !is_predicted}
    <img id="upload-img" src={fileUrl} alt="" class:imgOpacity={is_loading} />
  {/if}
  <div id="info">Image(png, jpg, jpeg) should be smaller than 5MB.</div>
  <div id="input-container">
    <input
      type="file"
      accept="image/jpg, image/jpeg, image/png"
      onchange={handleFileChange}
    />
    <button onclick={uploadImage} disabled={is_loading}
      >{is_loading ? "Processing..." : "Upload"}</button
    >
  </div>
</div>

<style>
  #label-container {
    min-width: fit-content;
    margin-top: 48px;
  }
  .label-box {
    padding: 16px;
    margin: 8px 0px;
    color: white;
    background-color: var(--sv-primary);
    border-radius: 4px;
    font-weight: bold;
  }
  #floating-box {
    position: fixed;
    left: 50%;
    bottom: 48px;
    transform: translate(-50%, 0);
    width: 80%;
    text-align: center;
  }
  #info {
    margin-bottom: 8px;
    color: var(--mid-gray);
    font-size: 14px;
  }
  #input-container {
    background-color: var(--dark-gray);
    border-radius: 24px;
    display: flex;
    padding: 12px 24px;
  }
  input {
    flex-grow: 1;
    color: white;
    background-color: transparent;
    border: none;
    resize: none;
    overflow-y: auto;
    outline: none;
  }
  button {
    color: var(--dark-gray);
    background-color: var(--light-gray);
    border: none;
    margin-left: 10px;
    cursor: pointer;
  }
  button:disabled,
  button[disabled] {
    opacity: 0.5;
    cursor: default;
  }
  #upload-img {
    width: 240px;
    margin-bottom: 16px;
    border-radius: 8px;
  }
  .imgOpacity {
    opacity: 0.3;
  }
</style>
