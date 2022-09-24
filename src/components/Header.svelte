<script lang="ts">
  import Navigation from '$components/Navigation.svelte';
  import LanguageSelect from './LanguageSelect.svelte';
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
    @apply sticky top-0 z-30 w-full py-8 sm:py-4 flex justify-around;
  }
</style>
