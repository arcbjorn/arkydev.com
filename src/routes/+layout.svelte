<script lang="ts">
  import '../app.css';
  import type { LayoutData } from './$types';

  import PageTransition from '$components/common/PageTransition.svelte';

  export const ssr = false;
  export const prerender = false;
  export const csr = true;

  export let data: LayoutData;
</script>

<PageTransition pathname={data.pathname}>
  <slot />
</PageTransition>
