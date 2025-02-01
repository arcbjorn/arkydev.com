<script lang="ts">
  import { EToken } from '$l18n/enums';
  import { t } from '$l18n';
  import { ECompanyEmail, ECompanyName } from '$components/enums';
  import Logo from '$components/common/Logo.svelte';
  import MailIcon from '$components/footer/MailIcon.svelte';
  import TelegramIcon from '$components/footer/TelegramIcon.svelte';

  const currentYear = new Date().getFullYear();
</script>

<footer class="dark:bg-stone-950 dark:text-white">
  <div class="flex justify-around items-center flex-wrap border-b-2 dark:border-gray-700 py-12">
    <div class="flex">
      <div class="flex flex-col">
        <a href="/" class="flex p-4">
          <Logo width={'30'} height={'45'} />
          <div class="flex flex-wrap pl-4 gap-y-2 max-w-fit">
            <span class="text-sm font-semibold"
              >{ECompanyName.SHORT} {$t(EToken.COMPANY_DEVELOPMENT)}</span
            >
          </div>
        </a>
        <p class="text-xs pl-4">Legal ID: 316366767</p>
      </div>

      <div class="flex flex-col p-4 gap-y-1">
        <a class="text-xs hover:text-gray-600 dark:hover:text-gray-300" href={EToken.LEGAL}
          >{$t(EToken.LEGAL)}</a
        >
        <a class="text-xs hover:text-gray-600 dark:hover:text-gray-300" href={EToken.PRIVACY}
          >{$t(EToken.PRIVACY)}</a
        >
        <a class="text-xs hover:text-gray-600 dark:hover:text-gray-300" href={EToken.TERMS}
          >{$t(EToken.TERMS)}</a
        >
      </div>
    </div>
    <div class="hidden sm:flex p-6 gap-4">
      <a
        class="link hover:text-gray-600 dark:hover:text-gray-300"
        href={'mailto:' + ECompanyEmail.HELLO}><MailIcon /></a
      >
      <a class="hover:text-gray-600 dark:hover:text-gray-300" href="https://t.me/arcbjorn"
        ><TelegramIcon /></a
      >
    </div>
  </div>
  <span class="text-center p-4 text-xs"
    >{currentYear} {ECompanyName.EXTENDED}. All rights reserved.</span
  >
</footer>

<style>
  footer {
    @apply w-full flex flex-col border-b-2 bg-white dark:bg-stone-950 bg-cover;
  }
</style>
