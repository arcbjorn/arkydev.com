<script lang="ts">
  import { t } from '$l18n';
  import { EToken } from '$l18n/enums';
  import { NAVIGATION_ANCHOR } from '$routes/types';
  import CompanyIntro from './CompanyIntro.svelte';
</script>

<main>
  <div class="flex justify-around flex-wrap">
    <div class="self-center">
      <CompanyIntro />
    </div>
    <div class="flex flex-col gap-y-4 p-8 border-2 border-black bg-white">
      <div class="text-md sm:text-xl">
        {@html $t(EToken.DESCRIPTION)}
      </div>

      <a href={NAVIGATION_ANCHOR[EToken.SERVICES]}>
        <button class="call-to-action">{$t(EToken.CALL)}</button>
      </a>
    </div>
  </div>
</main>

<style>
  main {
    @apply grow w-full flex flex-col justify-around border-b-2 bg-white;
    background: url(/core.svg) no-repeat center;
  }

  .call-to-action {
    @apply p-4 border-2 bg-white;
  }

  .call-to-action:hover {
    @apply bg-black text-white;
  }
</style>
