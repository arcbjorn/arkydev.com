<script lang="ts">
  import CompanyIntro from '$components/common/CompanyIntro.svelte';
  import Description from '$components/main/Description.svelte';
  import MainBackground from '$components/common/MainBackground.svelte';
</script>

<main class="relative overflow-hidden">
  <MainBackground className="absolute inset-0 w-full h-full object-cover" />
  <div class="flex justify-evenly gap-4 flex-wrap relative">
    <div class="self-center hidden lg:block">
      <CompanyIntro />
    </div>
    <Description />
  </div>
</main>

<style>
  main {
    @apply grow w-full flex flex-col justify-center border-b-2 bg-white dark:bg-stone-950 dark:border-gray-700;
  }
</style>
