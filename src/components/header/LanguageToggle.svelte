<script lang="ts">
  import { language } from '$stores/language';
  import { ELanguage } from '$l18n/enums';
  import FlagJapan from '$components/common/FlagJapan.svelte';
  import FlagUK from '$components/common/FlagUK.svelte';

  const toggleLanguage = () => {
    language.update(lang => lang === ELanguage.EN ? ELanguage.JA : ELanguage.EN);
  };
</script>

<button type="button" title="Toggle Language" on:click={toggleLanguage} class="languageToggle">
  <div class="flagWrapper">
    {#if $language === ELanguage.EN}
      <FlagJapan />
    {:else}
      <FlagUK />
    {/if}
  </div>
</button>

<style>
  .languageToggle {
    @apply relative w-8 h-6 drop-shadow-lg mx-4 overflow-hidden border-2 border-black dark:border-gray-300 hover:bg-black dark:hover:bg-white;
  }
  .flagWrapper {
    @apply absolute inset-0 flex items-center justify-center;
  }
  :global(.languageToggle:hover .background) {
    @apply fill-white dark:fill-black;
  }
  :global(.languageToggle:hover .circle) {
    @apply fill-black dark:fill-white;
  }
  :global(.languageToggle:hover .diagonals-thick),
  :global(.languageToggle:hover .cross-thick) {
    @apply stroke-black dark:stroke-white;
  }
  :global(.languageToggle:hover .diagonals-thin),
  :global(.languageToggle:hover .cross-thin) {
    @apply stroke-white dark:stroke-black;
  }
</style>
