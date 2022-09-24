<script lang="ts">
    import "../app.css";
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
    <a href={option.anchor} class="px-2">
      {option.name}
    </a>
    {/each}
  </nav>
</header>

<slot></slot>

<style>
  header {
    @apply sticky top-0 z-30 w-full px-4 py-4 sm:px-4 flex justify-around;
  }
  nav {
    @apply flex justify-around;
  }
	
</style>