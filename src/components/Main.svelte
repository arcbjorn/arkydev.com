<script lang="ts">
  import { t } from '$l18n';
  import { EToken } from '$l18n/enums';
</script>

<main>
  <div class="flex justify-around">
    <div>
      <div class="text-4xl">Arky Software Development</div>
      <div>{$t(EToken.SLOGAN)}</div>
    </div>
    <div class="text-xl">
      {@html $t(EToken.DESCRIPTION)}
    </div>
  </div>
</main>

<style>
  main {
    @apply grow w-full flex flex-col justify-around py-8 border-b-2 bg-white;
  }
</style>
