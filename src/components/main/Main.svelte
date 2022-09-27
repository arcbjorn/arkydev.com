<script lang="ts">
  import CompanyIntro from '$components/common/CompanyIntro.svelte';
  import Description from '$components/main/Description.svelte';
</script>

<main>
  <div class="flex justify-evenly gap-4 flex-wrap">
    <div class="self-center hidden lg:block">
      <CompanyIntro />
    </div>
    <Description />
  </div>
</main>

<style>
  main {
    @apply grow w-full flex flex-col justify-center border-b-2 bg-white;
    background: url(/main_bg.svg) no-repeat center;
  }
</style>
