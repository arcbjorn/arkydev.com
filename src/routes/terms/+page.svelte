<script lang="ts">
  import Footer from '$components/footer/Footer.svelte';
  import Header from '$components/header/Header.svelte';
  import Terms from '$components/terms/Terms.svelte';
  import { EToken } from '$l18n/enums';
  import { t } from '$l18n';
</script>

<svelte:head>
  <title>Arky - {$t(EToken.TERMS_SHORT)}</title>
</svelte:head>

<div class="flex flex-col">
  <Header isLegalPage />
  <Terms />
</div>

<Footer />
