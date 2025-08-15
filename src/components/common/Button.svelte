<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { EButtonVariant } from '$lib/constants';
  import type { ButtonVariant } from '$types';
  
  export let variant: ButtonVariant = EButtonVariant.NAV;
  export let href: string | undefined = undefined;
  export let type: 'button' | 'submit' | 'reset' = 'button';

  const dispatch = createEventDispatcher();

  function handleClick(event: MouseEvent) {
    dispatch('click', event);
  }
</script>

{#if href}
  <a {href} class="btn-{variant}" on:click={handleClick} {...$$restProps}>
    <slot />
  </a>
{:else}
  <button {type} class="btn-{variant}" on:click={handleClick} {...$$restProps}>
    <slot />
  </button>
{/if}

<style>
  .btn-nav {
    @apply px-4 sm:px-8 dark:text-white transition-colors duration-300;
  }
  
  .btn-action {
    @apply px-8 py-4 bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors duration-300 rounded;
  }
  
  .btn-mobile-nav {
    @apply text-2xl px-8 py-4 inline-block text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300;
  }
  
  .btn-toggle {
    @apply px-4 sm:px-8 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300;
  }
</style>