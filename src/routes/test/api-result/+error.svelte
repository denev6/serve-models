<script>
  import { page } from "$app/state";
</script>

<!-- Errors while loading the page -->
<h1>Status: {page.status}</h1>
<p>{page.error.message}</p>
