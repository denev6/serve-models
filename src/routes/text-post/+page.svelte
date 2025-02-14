<script>
  import arrowIcon from "$lib/assets/icons/arrow-up.svg";

  export let data;
  const API_BASE_URL = data.apiUrl;

  let text = "";
  let responseMessage = "";
  let textRequest = "";
  let is_loading = false;

  async function submitText() {
    if (!text.trim()) {
      alert("Please enter some text!");
      return;
    }

    // JSON Request
    textRequest = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text }),
    };

    is_loading = true;
    // Fetch response from API
    const response = await fetch(API_BASE_URL + "/text", textRequest);

    if (response.ok) {
      responseMessage = await response.text();
    } else {
      responseMessage = "Error: Unable to send request.";
    }
    is_loading = false;
  }

  function handleKeydown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submitText();
    }
  }
</script>

<svelte:document onkeydown={handleKeydown} />

<h1>Post sentences</h1>
<div id="floating-box">
  <div id="info">Press SHIFT + ENTER to insert a newline</div>
  <div id="input-container">
    <textarea bind:value={text} placeholder="Enter text here..."></textarea>
    <button onclick={submitText} onkeydown={handleKeydown} disabled={is_loading}
      ><img src={arrowIcon} alt="submit" /></button
    >
  </div>
</div>
<div>
  {#if responseMessage}
    <p class="response">Request: {JSON.stringify(textRequest)}</p>
    <p class="response">Response: {responseMessage}</p>
  {/if}
</div>

<style>
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
    align-items: flex-end;
    padding: 12px 16px;
  }

  textarea {
    flex-grow: 1;
    padding: 4px;
    font-size: 18px;
    line-height: 1.3;
    color: white;
    background-color: transparent;
    border: none;
    height: 60px;
    resize: none;
    overflow-y: auto;
    outline: none;
    font-family: inherit;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--dark-gray);
    background-color: var(--light-gray);
    font-size: 24px;
    padding: 4px;
    border: none;
    border-radius: 50%;
    margin-left: 10px;
    cursor: pointer;
    align-self: flex-end;
    white-space: nowrap;
  }

  .response {
    margin-top: 24px;
  }
</style>
