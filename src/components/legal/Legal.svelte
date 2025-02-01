<script lang="ts">
  import { ECompanyName } from '$components/enums';
  import MainBackground from '$components/common/MainBackground.svelte';
</script>

<main class="relative overflow-hidden">
  <MainBackground className="absolute inset-0 w-full h-full object-cover" />
  <div
    class="flex p-4 m-8 sm:m-0 md:p-8 border-2 bg-white dark:bg-stone-950 dark:text-white dark:border-gray-300 border-black max-w-fit relative"
  >
    Oleg Luganskiy<br />
    DBA. "{ECompanyName.EXTENDED}"<br />
    &nbsp;<br />
    Registered ID - 316366767<br />
    &nbsp;<br />
    Legal Address:<br />
    19 Shartava Avenue<br />
    3700 Rustavi<br />
    Georgia
  </div>
</main>

<style>
  main {
    @apply grow w-full flex flex-col justify-center items-center border-b-2 bg-white dark:bg-stone-950 dark:border-gray-700;
  }
</style>
