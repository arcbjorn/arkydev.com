<script lang="ts">
  import { lang, langs } from '$l18n';
</script>

<div class="px-4 sm:px-8">
  <select bind:value={$lang}>
    {#each langs as lang}
      <option value={lang}>{lang}</option>
    {/each}
  </select>
</div>
