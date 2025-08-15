<script lang="ts">
  import { language } from '$stores/language';
  import { langs } from '$l18n';
</script>

<div class="px-4 sm:px-8">
  <select bind:value={$language}>
    {#each langs as langOption}
      <option value={langOption}>{langOption}</option>
    {/each}
  </select>
</div>
