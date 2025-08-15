<script lang="ts">
  import { t } from '$l18n';
  import navOptions from '$components/header/navOptions';
  import Logo from '$components/common/Logo.svelte';
  import Button from '$components/common/Button.svelte';
  import { isMenuOpen, toggleMenu, closeMenu } from '$stores/navigation';
  import { onMount } from 'svelte';

  onMount(() => {
    const unsubscribe = isMenuOpen.subscribe((open) => {
      if (typeof document !== 'undefined') {
        if (open) {
          document.body.classList.add('menu-open');
        } else {
          document.body.classList.remove('menu-open');
        }
      }
    });

    return unsubscribe;
  });

  const handleLinkClick = () => {
    closeMenu();
  };
</script>

<button
  class="mobile-nav-button"
  on:click={toggleMenu}
>
  <span class="sr-only">Open main menu</span>

  <div class="hamburger-container">
    <span
      class="hamburger-line"
      class:rotate-45={$isMenuOpen}
      class:-translate-y-1.5={!$isMenuOpen}
    />
    <span
      class="hamburger-line"
      class:opacity-0={$isMenuOpen}
    />
    <span
      class="hamburger-line"
      class:-rotate-45={$isMenuOpen}
      class:translate-y-1.5={!$isMenuOpen}
    />
  </div>
</button>

{#if $isMenuOpen}
  <div class="mobile-menu-overlay">
    <div class="mobile-menu-container">
      <ul class="mobile-menu-list">
        {#each navOptions as option}
          <li>
            <Button
              variant="mobile-nav"
              href={option.anchor}
              on:click={handleLinkClick}
            >
              {$t(option.token)}
            </Button>
          </li>
        {/each}
      </ul>
      <div class="mt-16">
        <Logo />
      </div>
    </div>
  </div>
{/if}
