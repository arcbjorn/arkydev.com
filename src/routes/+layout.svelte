<script lang="ts">
  import '../app.css';
  import type { LayoutData } from './$types';
  import PageTransition from '$components/common/PageTransition.svelte';
  import { theme } from '$stores/theme';

  export let data: LayoutData;
  
  // Initialize theme on page load
  $: $theme;
</script>

<PageTransition pathname={data.pathname}>
  <slot />
</PageTransition>
