<script lang="ts">
  import { EToken } from '$l18n/enums';
  import { t } from '$l18n';
  import { ECompanyEmail } from '$components/enums';
  import CyberBackground from '$components/common/CyberBackground.svelte';
</script>

<div id={EToken.CONTACT} class="contact relative overflow-hidden">
  <CyberBackground className="absolute inset-0 w-full h-full object-cover" />
  <div class="block relative">{$t(EToken.CONTACT_ACTION)}</div>
  <div class="block shadow-md shadow-green-500 relative">
    {$t(EToken.CONTACT_LINKS)}
    <span class="links">
      <a class="link" href={'mailto:' + ECompanyEmail.HELLO}> email </a>
      &
      <a class="link" href="https://t.me/arcbjorn"> telegram </a>
    </span>
  </div>
</div>

<style>
  .block {
    @apply p-8 border-2 border-black dark:border-gray-300 bg-white dark:bg-stone-950 dark:text-white flex justify-center items-center flex-wrap;
  }

  .contact {
    @apply w-full p-8 flex justify-around items-center flex-wrap border-b-2 dark:border-gray-700 bg-white dark:bg-stone-950;
  }

  .link {
    @apply p-2 underline decoration-wavy decoration-green-600 dark:decoration-green-400 font-semibold hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300;
  }

  .links {
    @apply flex items-center whitespace-nowrap;
  }
</style>
