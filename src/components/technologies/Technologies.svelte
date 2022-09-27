<script lang="ts">
  import { EToken } from '$l18n/enums';
  import { t } from '$l18n';

  const technogolies: string[] = [
    'Distributed systems',
    'Blockchain solutions',
    'Cross-platform Desktop apps',
    'Cross-platform Mobile apps',
    'Full-stack Web solutions'
  ];
</script>

<div id={EToken.ABOUT} class="about">
  <div class="block">{$t(EToken.ABOUT_US)}</div>

  <div class="flex gap-4 flex-wrap">
    {#each technogolies as technology}
      <div class="block technology">{technology}</div>
    {/each}
  </div>
</div>

<style>
  .block {
    @apply p-4 md:p-10 border-2 border-black bg-white flex justify-center items-center max-w-fit flex-wrap;
  }

  .technology {
    @apply font-semibold;
  }

  .technology:hover {
    @apply shadow-md shadow-green-500;
  }

  .about {
    @apply w-full p-8 flex justify-around items-center flex-wrap border-b-2 gap-4 bg-white bg-cover;
    background-image: url(/cyber_bg.svg);
  }
</style>
