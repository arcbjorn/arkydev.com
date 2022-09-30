<script lang="ts">
  import { t } from '$l18n';
  import navOptions from '$components/header/navOptions';
  import Logo from '$components/common/Logo.svelte';

  let isOpen = false;

  const toggleMenu = () => (isOpen = !isOpen);
</script>

<svelte:head>
  {#if isOpen}
    <style>
      body {
        overflow: hidden;
      }
    </style>
  {/if}
</svelte:head>

<button
  class="w-10 h-10 relative focus:outline-none bg-white border-black"
  class:border-2={!isOpen}
  on:click={toggleMenu}
>
  <span class="sr-only">Open main menu</span>

  <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
    <span
      aria-hidden="true"
      class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
      class:rotate-45={isOpen}
      class:-translate-y-1.5={!isOpen}
    />
    <span
      aria-hidden="true"
      class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
      class:opacity-0={isOpen}
    />
    <span
      aria-hidden="true"
      class="block absolute h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out"
      class:-rotate-45={isOpen}
      class:translate-y-1.5={!isOpen}
    />
  </div>
</button>

{#if isOpen}
  <div class="w-full h-screen z-90 left-0 top-30 bg-white absolute">
    <div class="relative flex flex-col items-center justify-evenly h-full">
      <ul class="relative">
        {#each navOptions as option}
          <li class="relative text-2xl">
            <a
              class="flex items-center p-6 h-12 text-ellipsis whitespace-nowrap hover:bg-gray-100 transition duration-300 ease-in-out"
              href={option.anchor}
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
              on:click={toggleMenu}
            >
              {$t(option.token)}
            </a>
          </li>
        {/each}
      </ul>
      <Logo />
    </div>
  </div>
{/if}
