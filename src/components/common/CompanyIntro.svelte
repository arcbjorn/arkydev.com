<script lang="ts">
  import { t } from '$l18n';
  import { EToken } from '$l18n/enums';
  import { ECompanyName } from '$components/enums';
  import Logo from '$components/common/Logo.svelte';
</script>

<div
  class="flex p-8 border-2 bg-white dark:bg-stone-950 dark:text-white border-black dark:border-gray-700"
>
  <Logo />
  <div class="flex flex-col pl-4 gap-y-2">
    <span class="text-2xl sm:text-4xl">{ECompanyName.SHORT} {$t(EToken.COMPANY_DEVELOPMENT)}</span>
    <span class="text-md sm:text-xl">{$t(EToken.SLOGAN)}</span>
  </div>
</div>
