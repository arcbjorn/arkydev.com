<script lang="ts">
  import Main from '$components/main/Main.svelte';
  import Services from '$components/services/Services.svelte';
  import Header from '$components/header/Header.svelte';
  import Contact from '$components/contact/Contact.svelte';
  import Footer from '$components/footer/Footer.svelte';
  import Partners from '$components/partners/Partners.svelte';
  import Technologies from '$components/technologies/Technologies.svelte';
</script>

<div class="flex flex-col h-full">
  <Header />
  <Main />
</div>

<Services />
<Technologies />
<Partners />
<Contact />
<Footer />
