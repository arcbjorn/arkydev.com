<script lang="ts">
  import { t } from '$l18n';

  import type { INavigationOption } from '$routes/types';
  import { EToken } from '$l18n/enums';

  const navOptions: INavigationOption[] = [
    {
      token: EToken.SERVICES,
      anchor: `#${EToken.SERVICES}`
    },
    {
      token: EToken.ABOUT,
      anchor: `#${EToken.ABOUT}`
    },
    {
      token: EToken.CONTACT,
      anchor: `#${EToken.CONTACT}`
    }
  ];
</script>

<nav>
  {#each navOptions as option}
    <a href={option.anchor} class="option">
      {$t(option.token)}
    </a>
  {/each}
</nav>

<style>
  nav {
    @apply flex justify-around invisible lg:visible;
  }
  .option {
    @apply px-4 sm:px-8;
  }
</style>
