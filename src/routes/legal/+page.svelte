<script lang="ts">
  import Footer from '$components/footer/Footer.svelte';
  import Header from '$components/header/Header.svelte';
  import Legal from '$components/legal/Legal.svelte';
  import { EToken } from '$l18n/enums';
  import { t } from '$l18n';
</script>

<svelte:head>
  <title>Arky - {$t(EToken.LEGAL_SHORT)}</title>
</svelte:head>

<div class="flex flex-col h-full">
  <Header isLegalPage />
  <Legal />
</div>

<Footer />
