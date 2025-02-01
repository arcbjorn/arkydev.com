<script lang="ts">
  import { EToken } from '$l18n/enums';
  import { t } from '$l18n';
  import { TECHNOLOGIES } from '$constants';
  import CyberBackground from '$components/common/CyberBackground.svelte';
</script>

<div id={EToken.ABOUT} class="about relative overflow-hidden">
  <CyberBackground className="absolute inset-0 w-full h-full object-cover" />
  <div class="block relative mb-8">{$t(EToken.ABOUT_US)}</div>

  <div class="flex gap-4 flex-wrap relative">
    {#each TECHNOLOGIES as { name }}
      <div class="block technology">{name}</div>
    {/each}
  </div>
</div>

<style>
  .block {
    @apply p-4 md:p-10 border-2 border-black dark:border-gray-300 bg-white dark:bg-stone-950 dark:text-white flex justify-center items-center max-w-fit flex-wrap;
  }

  .technology {
    @apply font-semibold dark:text-white;
  }

  .technology:hover {
    @apply shadow-md shadow-green-500;
  }

  .about {
    @apply w-full p-8 flex justify-around items-center flex-wrap border-b-2 dark:border-gray-700 bg-white dark:bg-stone-950 dark:text-white gap-8;
  }
</style>
