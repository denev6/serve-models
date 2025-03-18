<script>
  import arrowIcon from "$lib/assets/icons/arrow-up.svg";
  import { API_BASE_URL } from "$lib/constants";
  import SentenceBox from "./SentenceBox.svelte";

  let text = "";
  let responseMessage = "";
  let textRequest = "";
  let is_loading = false;
  let conversations = [];

  async function askLLM() {
    is_loading = true; // prevent duplicate inputs

    if (!text.trim()) {
      alert("Please enter some text!");
      return;
    }
    conversations = [...conversations, ["user", text]];
    document.getElementById("input-area").value = "";

    // JSON Request
    textRequest = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text }),
    };

    conversations = [...conversations, ["loading", "Loading..."]];
    requestAnimationFrame(() => {
      scrollToBottom();
    });

    // Fetch response from API
    const response = await fetch(`${API_BASE_URL}/mistral`, textRequest);

    if (response.ok) {
      responseMessage = await response.json();
      responseMessage = responseMessage.text;
    } else {
      responseMessage = "Error: Unable to send request.";
    }
    conversations = [...conversations.slice(0, -1), ["llm", responseMessage]];
    is_loading = false;
  }

  function handleKeydown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      if (!is_loading) {
        event.preventDefault();
        askLLM();
      }
    }
  }

  function scrollToBottom() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
</script>

<svelte:document onkeydown={handleKeydown} />

<h1>Ask LLM</h1>
<div id="floating-box">
  <div id="input-container">
    <textarea id="input-area" bind:value={text} placeholder="Enter text here..."
    ></textarea>
    <button onclick={askLLM} onkeydown={handleKeydown} disabled={is_loading}
      ><img src={arrowIcon} alt="submit" /></button
    >
  </div>
  <div id="info">Press SHIFT + ENTER to insert a newline</div>
</div>
<div id="conversation-container">
  {#each conversations as conversation, i}
    <SentenceBox speaker={conversation[0]} sentence={conversation[1]} />
  {/each}
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
    margin: 8px 0px;
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
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  #conversation-container {
    margin-bottom: 160px;
  }
</style>
