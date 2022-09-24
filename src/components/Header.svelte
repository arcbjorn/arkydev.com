<script lang="ts">
    import type { INavigationOption } from '$routes/types';
	import { Token } from "$i18n/enums";

    const navOptions: INavigationOption[] = [
      {
        name: Token.HOME,
        anchor: '/#'
      },
      {
        name: Token.SERVICES,
        anchor: `#${Token.SERVICES}`
      },
      {
        name: Token.WHY,
        anchor: `#${Token.WHY}`
      },
      {
        name: Token.ABOUT,
        anchor: `#${Token.ABOUT}`
      },
      {
        name: Token.CONTACT,
        anchor: `#${Token.CONTACT}`
      }
    ]
</script>

<header>
  logo
  <nav>
    {#each navOptions as option}
    <a href={option.anchor} class="option">
      {option.name}
    </a>
    {/each}
  </nav>
</header>

<style>
  header {
    @apply sticky top-0 z-30 w-full py-8 sm:py-4 flex justify-around;
  }
  nav {
    @apply flex justify-around invisible lg:visible;
  }
  .option {
    @apply px-4 sm:px-8;
  }
	
</style>