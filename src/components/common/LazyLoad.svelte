<script lang="ts">
  import { onMount } from 'svelte';
  
  export let threshold = 0.1;
  export let rootMargin = '50px';
  
  let visible = false;
  let element: HTMLDivElement;
  
  onMount(() => {
    if (!element) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible = true;
            observer.unobserve(element);
          }
        });
      },
      { threshold, rootMargin }
    );
    
    observer.observe(element);
    
    return () => observer.disconnect();
  });
</script>

<div bind:this={element}>
  {#if visible}
    <slot />
  {:else}
    <div class="min-h-[200px] flex items-center justify-center">
      <div class="animate-pulse text-gray-400">Loading...</div>
    </div>
  {/if}
</div>