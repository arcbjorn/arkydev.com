<script lang="ts">
  import { t } from '$l18n';
  import { EToken } from '$l18n/enums';
  import { ECompanyName } from '$components/enums';
  import Logo from '$components/common/Logo.svelte';
</script>

<div class="flex p-8 border-2 bg-white border-black">
  <Logo />
  <div class="flex flex-col pl-4 gap-y-2">
    <span class="text-2xl sm:text-4xl">{ECompanyName.FULL}</span>
    <span class="text-md sm:text-xl">{$t(EToken.SLOGAN)}</span>
  </div>
</div>
