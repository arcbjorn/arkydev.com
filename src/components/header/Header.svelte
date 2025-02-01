<script lang="ts">
  import { t } from '$l18n';
  import { EToken } from '$l18n/enums';
  import Navigation from '$components/header/Navigation.svelte';
  import { ECompanyName } from '$components/enums';
  import MobileNavigation from '$components/header/MobileNavigation.svelte';
  import ThemeToggle from '$components/header/ThemeToggle.svelte';

  export let isLegalPage: boolean = false;
</script>

<header class="dark:bg-gray-900 dark:text-white">
  {#if isLegalPage}
    <a href="/" class="flex flex-col">
      <span class="text-md font-bold">{ECompanyName.FULL}</span>
      <span class="text-xs">{$t(EToken.SLOGAN)}</span>
    </a>
  {:else}
    <a href="/" class="hidden xs:flex lg:hidden flex-col">
      <span class="text-md font-bold">{ECompanyName.FULL}</span>
      <span class="text-xs">{$t(EToken.SLOGAN)}</span>
    </a>

    <a href="/" class="xs:hidden flex-col">
      <div class="text-base font-bold">{ECompanyName.FULL}</div>
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
      <MobileNavigation />
    </div>
  {/if}
</header>

{#if isLegalPage}
  <a href="/">
    <button
      type="button"
      title="Back"
      class="fixed z-90 bottom-10 left-8 flex justify-center items-center border-2 border-black bg-white w-16 h-16 drop-shadow-lg hover:text-white text-5xl hover:bg-black"
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
