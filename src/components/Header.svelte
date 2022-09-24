<script lang="ts">
  import Navigation from '$components/Navigation.svelte';
</script>

<header>
  <a href="/#">logo</a>
  <Navigation />
</header>

<style>
  header {
    @apply sticky top-0 z-30 w-full py-8 sm:py-4 flex justify-around;
  }
</style>
