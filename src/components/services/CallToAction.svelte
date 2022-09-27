<script lang="ts">
  import { EToken } from '$l18n/enums';
  import { NAVIGATION_ANCHOR } from '$routes/types';

  export let text: string;
</script>

<a href={NAVIGATION_ANCHOR[EToken.CONTACT]} class="call-to-action">
  <button type="button" class="dynamic-underline">{text} -> </button>
</a>

<style>
  .call-to-action {
    @apply font-bold text-green-600;
  }
</style>
