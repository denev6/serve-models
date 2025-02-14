<script>
  import ListBox from "./ListBox.svelte";

  /** $state and $derived
   * : Register variables
   */
  let logs = $state([]);
  let numLogs = $derived(logs.length);

  let slider;
  const logNumber = () => {
    let newNum = slider.value;
    logs.push(newNum);
  };
</script>

<h1>Sample Page</h1>
<p>Items: {numLogs}</p>

<div class="slide-container">
  <input
    bind:this={slider}
    type="range"
    min="1"
    max="100"
    value="50"
    id="range-slider"
  />
  <div>
    <button onclick={logNumber}>Log</button>
    <button
      onclick={() => {
        logs = [];
      }}>Clear</button
    >
  </div>
</div>

<div>
  <!-- IF statement -->
  {#if numLogs == 0}
    <div>Nothing is logged.</div>
  {/if}

  <!-- EACH statement -->
  {#each logs as log, i}
    <!-- Component -->
    <ListBox {i} num={log} />
  {/each}
</div>

<style>
  .slide-container {
    width: 100%;
    margin: 16px 8px;
  }
  #range-slider {
    width: 60%;
  }
</style>
