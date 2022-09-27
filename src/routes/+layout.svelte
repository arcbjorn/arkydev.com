<script lang="ts">
  import '../app.css';
  export const ssr = false;
  export const prerender = false;
  export const csr = true;
</script>

<svelte:head>
  <title>Arky Development</title>
</svelte:head>

<slot />
