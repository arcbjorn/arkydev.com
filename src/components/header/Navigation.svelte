<script lang="ts">
  import { t } from '$l18n';
  import navOptions from '$components/header/navOptions';
  import ThemeToggle from '$components/header/ThemeToggle.svelte';
  import LanguageToggle from '$components/header/LanguageToggle.svelte';
</script>

<nav class="flex justify-around items-center">
  {#each navOptions as option}
    <a href={option.anchor} class="option">
      {$t(option.token)}
    </a>
  {/each}
  <ThemeToggle />
  <LanguageToggle />
</nav>

<style>
  .option {
    @apply px-4 sm:px-8 dark:text-white;
  }

  .option:hover {
    position: relative;

    background:
      linear-gradient(
          to bottom,
          currentColor 1.2px,
          transparent 1.2px,
          transparent calc(100% - 1.2px),
          currentColor calc(100% - 1.2px)
        )
        no-repeat,
      linear-gradient(
          to left,
          currentColor 1.2px,
          transparent 1.2px,
          transparent calc(100% - 1.2px),
          currentColor calc(100% - 1.2px)
        )
        no-repeat;

    background-position: center;
    background-size:
      calc(100% - 0.75em) 100%,
      100% calc(100% - 0.75em);
  }
</style>
