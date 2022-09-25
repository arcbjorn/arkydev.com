<script lang="ts">
  import { t } from '$l18n';
  import { EToken } from '$l18n/enums';
  import Navigation from '$components/header/Navigation.svelte';
  import { ECompanyName } from '$components/enums';
</script>

<header>
  <div class="onlyLargeScreen" />
  <div class="onlyLargeScreen">
    <Navigation />
  </div>

  <div class="hidden md:flex lg:hidden flex-col">
    <span class="text-md font-bold">{ECompanyName.FULL}</span>
    <span class="text-xs">{$t(EToken.SLOGAN)}</span>
  </div>

  <div class="md:hidden text-lg font-bold">{ECompanyName.SHORT}</div>

  <div class="lg:hidden">MobileNavigation</div>
</header>

<style>
  .onlyLargeScreen {
    @apply hidden lg:block;
  }

  header {
    @apply sticky top-0 z-30 w-full py-8 flex justify-around items-center border-b-2 bg-white;
  }
</style>
