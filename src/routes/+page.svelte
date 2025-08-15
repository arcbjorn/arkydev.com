<script lang="ts">
  import { t } from '$l18n';
  import { EToken, ECompanyName, LAZY_LOAD_DEFAULTS } from '$lib/constants';
  import Main from '$components/main/Main.svelte';
  import Services from '$components/services/Services.svelte';
  import Header from '$components/header/Header.svelte';
  import Contact from '$components/contact/Contact.svelte';
  import Footer from '$components/footer/Footer.svelte';
  import Technologies from '$components/technologies/Technologies.svelte';
  import Matrix from '$components/matrix/Matrix.svelte';
  import LazyLoad from '$components/common/LazyLoad.svelte';
</script>

<svelte:head>
  <title>{ECompanyName.SHORT} {$t(EToken.COMPANY_DEVELOPMENT)}</title>
</svelte:head>

<div class="flex flex-col h-full">
  <Header />
  <Main />
</div>

<Services />
<Technologies />
<LazyLoad threshold={LAZY_LOAD_DEFAULTS.THRESHOLD} rootMargin={LAZY_LOAD_DEFAULTS.ROOT_MARGIN}>
  <Matrix />
</LazyLoad>
<Contact />
<Footer />
