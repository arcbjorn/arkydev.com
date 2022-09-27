<script lang="ts">
  import { EToken } from '$l18n/enums';
  import { t } from '$l18n';
</script>

<div id={EToken.CONTACT} class="contact">
  <div class="block">{$t(EToken.CONTACT_ACTION)}</div>
  <div class="block shadow-md shadow-green-500">
    {$t(EToken.CONTACT_LINKS)}
    <span class="links">
      <a class="link" href="mailto:arcbjorn@proton.me"> email </a>
      &
      <a class="link" href="https://t.me/arcbjorn"> telegram </a>
    </span>
  </div>
</div>

<style>
  .block {
    @apply p-8 border-2 border-black bg-white flex justify-center items-center flex-wrap;
  }

  .contact {
    @apply w-full p-8 flex justify-around items-center flex-wrap border-b-2 gap-4 bg-white bg-cover;
    background-image: url(/cyber_bg.svg);
  }

  .link {
    @apply p-2 underline decoration-wavy decoration-green-600 font-semibold;
  }

  .links {
    @apply flex items-center whitespace-nowrap;
  }
</style>
