<script lang="ts">
  import { t } from '$l18n';
  import { EToken } from '$l18n/enums';
  import { NAVIGATION_ANCHOR } from '$routes/types';
</script>

<div class="flex flex-col gap-y-4 p-8 border-2 border-black bg-white">
  <div class="text-md sm:text-xl">
    {@html $t(EToken.DESCRIPTION)}
  </div>

  <a href={NAVIGATION_ANCHOR[EToken.SERVICES]}>
    <button class="call-to-action">{$t(EToken.CALL)}</button>
  </a>
</div>

<style>
  .call-to-action {
    @apply p-4 border-2 bg-white;
  }

  .call-to-action:hover {
    @apply bg-black text-white;
  }
</style>
