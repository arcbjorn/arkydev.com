<script lang="ts">
  import { t } from '$l18n';
  import navOptions from '$components/header/navOptions';
  import ThemeToggle from '$components/header/ThemeToggle.svelte';
  import LanguageToggle from '$components/header/LanguageToggle.svelte';
</script>

<nav class="flex justify-around items-center">
  {#each navOptions as option}
    <a href={option.anchor} class="nav-option">
      {$t(option.token)}
    </a>
  {/each}
  <ThemeToggle />
  <LanguageToggle />
</nav>
