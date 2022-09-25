<script lang="ts">
  import CompanyIntro from './CompanyIntro.svelte';
  import Description from './Description.svelte';
</script>

<main>
  <div class="flex justify-around flex-wrap">
    <div class="self-center">
      <CompanyIntro />
    </div>
    <Description />
  </div>
</main>

<style>
  main {
    @apply grow w-full flex flex-col justify-around border-b-2 bg-white;
    background: url(/core.svg) no-repeat center;
  }
</style>
