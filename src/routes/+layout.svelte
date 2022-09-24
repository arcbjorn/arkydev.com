<script lang="ts">
    import "../app.css";
    import { ENavigationName, type INavigationOption } from '$routes/types';

    const navOptions: INavigationOption[] = [
      {
        name: ENavigationName.HOME,
        anchor: '/#'
      },
      {
        name: ENavigationName.SERVICES,
        anchor: `#${ENavigationName.SERVICES}`
      },
      {
        name: ENavigationName.WHY,
        anchor: `#${ENavigationName.WHY}`
      },
      {
        name: ENavigationName.ABOUT,
        anchor: `#${ENavigationName.ABOUT}`
      },
      {
        name: ENavigationName.CONTACT,
        anchor: `#${ENavigationName.CONTACT}`
      }
    ]

    function handleAnchorClick (event: Event, name: ENavigationName) {
      event.preventDefault()
      const anchor = document.getElementById(name)
      if (anchor) {
        window.scrollTo({
          top: anchor.offsetTop,
          behavior: 'smooth'
        })
      }
    }
</script>

<nav class="sticky top-0 z-30 w-full px-2 py-4 sm:px-4">
  {#each navOptions as option}
  <a href={option.anchor} on:click={(event) => handleAnchorClick(event, option.name)}>
    {option.name}
  </a>
  {/each}
</nav>

<slot></slot>