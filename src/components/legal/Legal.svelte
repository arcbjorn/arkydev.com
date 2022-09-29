<script lang="ts">
  import { ECompanyName } from '$components/enums';
</script>

<main>
  <div class="flex p-4 m-8 sm:m-0 md:p-8 border-2 bg-white border-black max-w-fit">
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
    @apply grow w-full flex flex-col justify-center items-center border-b-2 bg-white;
    background: url(/main_bg.svg) no-repeat center;
  }
</style>
