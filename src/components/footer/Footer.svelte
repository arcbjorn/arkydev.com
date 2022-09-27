<script lang="ts">
  import { EToken } from '$l18n/enums';
  import { t } from '$l18n';
  import { ECompanyName } from '$components/enums';
  import Logo from '$components/common/Logo.svelte';
  import MailIcon from '$components/footer/MailIcon.svelte';
  import TelegramIcon from '$components/footer/TelegramIcon.svelte';

  const currentYear = new Date().getFullYear();
</script>

<footer>
  <div class="flex justify-around items-center flex-wrap border-b-2 py-12">
    <div class="flex">
      <div class="flex p-4">
        <Logo width={'30'} height={'45'} />
        <div class="flex flex-col pl-4 gap-y-2 max-w-fit">
          <span class="text-sm font-semibold">{ECompanyName.FULL}</span>
        </div>
      </div>

      <div class="flex flex-col p-4 gap-y-1">
        <a class="text-xs" href="/"> {$t(EToken.PRIVACY)}</a>
        <a class="text-xs" href="/"> {$t(EToken.TERMS)}</a>
      </div>
    </div>
    <div class="hidden sm:flex p-6 gap-4">
      <a href="mailto:arcbjorn@proton.me"> <MailIcon /> </a>
      <a href="https://t.me/arcbjorn"> <TelegramIcon /> </a>
    </div>
  </div>
  <div class="flex flex-col items-center gap-4 p-4 text-xs">
    <span class="text-center">
      Oleg Luganskiy DBA. {ECompanyName.EXTENDED}, ID - 316366767, Legal Address - 19 Shartava
      Avenue, Rustavi, Georgia
    </span>
    <span>{currentYear} ASDC. All rights reserved.</span>
  </div>
</footer>

<style>
  footer {
    @apply w-full flex flex-col border-b-2 bg-white bg-cover;
  }
</style>
