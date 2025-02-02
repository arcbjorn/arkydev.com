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
  class="w-10 h-10 relative focus:outline-none bg-white dark:bg-stone-950 border-2 border-black dark:border-gray-300 hover:bg-black dark:hover:bg-white transition-colors duration-300 z-50 group ml-4"
  on:click={toggleMenu}
>
  <span class="sr-only">Open main menu</span>

  <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <span
      class="block absolute h-0.5 w-5 bg-black dark:bg-white group-hover:bg-white dark:group-hover:bg-black transform transition duration-500 ease-in-out"
      class:rotate-45={isOpen}
      class:-translate-y-1.5={!isOpen}
    />
    <span
      class="block absolute h-0.5 w-5 bg-black dark:bg-white group-hover:bg-white dark:group-hover:bg-black transform transition duration-500 ease-in-out"
      class:opacity-0={isOpen}
    />
    <span
      class="block absolute h-0.5 w-5 bg-black dark:bg-white group-hover:bg-white dark:group-hover:bg-black transform transition duration-500 ease-in-out"
      class:-rotate-45={isOpen}
      class:translate-y-1.5={!isOpen}
    />
  </div>
</button>

{#if isOpen}
  <div class="fixed inset-0 z-40 bg-white dark:bg-stone-950">
    <div class="flex flex-col items-center justify-center h-screen">
      <ul class="space-y-8 text-center">
        {#each navOptions as option}
          <li>
            <a
              class="text-2xl px-8 py-4 inline-block text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
              href={option.anchor}
              on:click={toggleMenu}
            >
              {$t(option.token)}
            </a>
          </li>
        {/each}
      </ul>
      <div class="mt-16">
        <Logo />
      </div>
    </div>
  </div>
{/if}
