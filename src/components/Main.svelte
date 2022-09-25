<script lang="ts">
  import { t } from '$l18n';
  import { EToken } from '$l18n/enums';
  import { NAVIGATION_ANCHOR } from '$routes/types';
</script>

<main>
  <div class="flex justify-around flex-wrap">
    <div class="p-8">
      <div class="text-4xl">Arky Software Development</div>
      <div>{$t(EToken.SLOGAN)}</div>
    </div>
    <div class="flex flex-col p-8">
      <div class="text-lg sm:text-xl">
        {@html $t(EToken.DESCRIPTION)}
      </div>
      <a href={NAVIGATION_ANCHOR[EToken.SERVICES]} class="py-8">
        <button class="call-to-action">{$t(EToken.CALL)}</button>
      </a>
    </div>
  </div>
</main>

<style>
  main {
    @apply grow w-full flex flex-col justify-around py-8 border-b-2 bg-white;
  }

  .call-to-action {
    @apply p-4 border-2 bg-white;
  }

  .call-to-action:hover {
    @apply bg-black text-white;
  }
</style>
