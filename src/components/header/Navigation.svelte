<script lang="ts">
  import { t } from '$l18n';
  import navOptions from '$components/header/navOptions';
</script>

<nav class="flex justify-around">
  {#each navOptions as option}
    <a href={option.anchor} class="option">
      {$t(option.token)}
    </a>
  {/each}
</nav>

<style>
  .option {
    @apply px-4 sm:px-8;
  }

  .option:hover {
    position: relative;

    background: linear-gradient(
          to bottom,
          black 1.2px,
          transparent 1.2px,
          transparent calc(100% - 1.2px),
          black calc(100% - 1.2px)
        )
        no-repeat,
      linear-gradient(
          to left,
          black 1.2px,
          transparent 1.2px,
          transparent calc(100% - 1.2px),
          black calc(100% - 1.2px)
        )
        no-repeat;

    background-position: center;
    background-size: calc(100% - 0.75em) 100%, 100% calc(100% - 0.75em);
  }
</style>
