<script lang="ts">
  import '../app.css';
  import Header from '$components/header/Header.svelte';
</script>

<div class="flex flex-col h-full">
  <Header />
  <slot />
</div>

<style>
</style>
