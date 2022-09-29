<script lang="ts">
  import Footer from '$components/footer/Footer.svelte';
  import Header from '$components/header/Header.svelte';
  import Privacy from '$components/privacy/Privacy.svelte';
  import { EToken } from '$l18n/enums';
  import { t } from '$l18n';
</script>

<svelte:head>
  <title>Arky - {$t(EToken.PRIVACY_SHORT)}</title>
</svelte:head>

<div class="flex flex-col">
  <Header isLegalPage />
  <Privacy />
</div>

<Footer />
