<script lang="ts">
  import Navigation from '$components/header/Navigation.svelte';
  import LanguageSelect from '$components/header/LanguageSelect.svelte';
</script>

<header>
  <a href="/#">logo</a>
  <div class="flex justify-around">
    <Navigation />
    <LanguageSelect />
  </div>
</header>

<style>
  header {
    @apply sticky top-0 z-30 w-full py-8 flex justify-around border-b-2 bg-white;
  }
</style>
