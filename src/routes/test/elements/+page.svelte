<script>
  let scrollY = 0;
  let toggleEnter = false;
  let enterSign = "@";

  function handleScroll() {
    scrollY = window.scrollY;
  }

  function handleKeydown(event) {
    if (event.key === "Enter") {
      toggleEnter = toggleEnter === false ? true : false;
      if (toggleEnter) enterSign = "#";
      else enterSign = "@";
    }
  }
</script>

<!-- Event Listener with special elements -->
<svelte:window on:scroll={handleScroll} />
<svelte:document on:keydown={handleKeydown} />

<div id="scroll-container"></div>
<div id="window-info">
  <div>Scroll Position: {scrollY}px</div>
  <div>Press Enter to change: {enterSign}</div>
</div>

<h1>Scroll Down!</h1>

<style>
  h1 {
    z-index: 1;
    float: right;
  }
  #window-info {
    position: fixed;
    top: 32px;
    left: 16px;
    background-color: white;
    border-radius: 4px;
    opacity: 0.8;
    padding: 16px 8px;
    width: 240px;
    z-index: 2;
    font-weight: bold;
    line-height: 1.8;
  }
  #scroll-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2000px;
    min-height: 200vh;
    background: linear-gradient(
      0deg,
      var(--sv-primary) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    z-index: -1;
  }
</style>
