<script>
  export let data;
  let req = data.json;
</script>

<h1>Server-side Loading</h1>
<p>GET request from <a href="/api">/api</a> before loading the page</p>
<ul>
  <li>message: {req.message}</li>
  <li>time: {req.time}</li>
</ul>

<style>
  ul {
    line-height: 1.8;
  }
</style>
