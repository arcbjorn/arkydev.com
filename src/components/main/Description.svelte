<script lang="ts">
  import { t } from '$l18n';
  import { EToken } from '$l18n/enums';
  import { NAVIGATION_ANCHOR } from '$routes/types';
</script>

<div
  class="flex flex-col gap-y-4 p-4 m-8 sm:m-0 md:p-8 border-2 border-black dark:border-gray-700 bg-white dark:bg-stone-950"
>
  <div class="text-base md:text-xl max-w-lg dark:text-white">
    {$t(EToken.DESCRIPTION)}
  </div>

  <a href={NAVIGATION_ANCHOR[EToken.SERVICES]}>
    <button class="call-to-action">{$t(EToken.ACTION)}</button>
  </a>
</div>

<style>
  .call-to-action {
    @apply p-4 border-2 bg-white dark:bg-stone-950 dark:text-white border-green-500;
  }

  .call-to-action:hover {
    @apply bg-black text-white border-black dark:bg-white dark:text-black;
  }
</style>
