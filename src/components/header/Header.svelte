<script lang="ts">
  import { t } from '$l18n';
  import { EToken } from '$l18n/enums';
  import Navigation from '$components/header/Navigation.svelte';
  import { ECompanyName } from '$components/enums';
  import MobileNavigation from '$components/header/MobileNavigation.svelte';
  import ThemeToggle from '$components/header/ThemeToggle.svelte';
  import LanguageToggle from '$components/header/LanguageToggle.svelte';

  export let isLegalPage: boolean = false;
</script>

<header class="dark:bg-stone-950 dark:text-white">
  {#if isLegalPage}
    <div class="w-full max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8">
      <a href="/" class="flex flex-col">
        <span class="text-md font-bold">{ECompanyName.SHORT} {$t(EToken.COMPANY_DEVELOPMENT)}</span>
        <span class="text-xs">{$t(EToken.SLOGAN)}</span>
      </a>
      <div class="flex items-center gap-4">
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </div>
  {:else}
    <a href="/" class="hidden xs:flex lg:hidden flex-col">
      <span class="text-md font-bold">{ECompanyName.SHORT} {$t(EToken.COMPANY_DEVELOPMENT)}</span>
      <span class="text-xs">{$t(EToken.SLOGAN)}</span>
    </a>

    <a href="/" class="xs:hidden flex-col">
      <div class="text-base font-bold">{ECompanyName.SHORT} {$t(EToken.COMPANY_DEVELOPMENT)}</div>
    </a>
  {/if}

  {#if isLegalPage}
    <div />
  {:else}
    <div class="onlyLargeScreen" />
    <div class="onlyLargeScreen">
      <Navigation />
    </div>

    <div class="lg:hidden flex items-center">
      <ThemeToggle />
      <LanguageToggle />
      <MobileNavigation />
    </div>
  {/if}
</header>

{#if isLegalPage}
  <a href="/">
    <button
      type="button"
      title="Back"
      class="fixed z-90 bottom-10 left-8 flex justify-center items-center border-2 border-black dark:border-gray-300 bg-white dark:bg-stone-950 w-16 h-16 drop-shadow-lg hover:text-white dark:text-white text-5xl hover:bg-black dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
      >&#8592;</button
    >
  </a>
{/if}

<style>
  .onlyLargeScreen {
    @apply hidden lg:block;
  }

  header {
    @apply sticky top-0 z-30 w-full py-8 flex justify-evenly 2xs:justify-around items-center border-b-2 bg-white dark:border-gray-700;
  }
</style>
