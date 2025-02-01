<script lang="ts">
  import ConsultingIcon from '$components/services/icons/ConsultingIcon.svelte';

  import { t } from '$l18n';
  import { EToken } from '$l18n/enums';
  import CallToAction from '$components/services/CallToAction.svelte';
  import type { ComponentType, SvelteComponent } from 'svelte';

  export let icon: ComponentType<SvelteComponent<{}>>;
  export let heading: string;
  export let actionText: string;
</script>

<div class="service">
  <p class="service-heading">
    <svelte:component this={icon} />
    {heading}
  </p>
  <p class="service-desc">
    <slot />
  </p>
  <CallToAction text={actionText} />
</div>

<style>
  .service {
    @apply text-lg flex flex-col gap-y-4 sm:basis-1/2 xl:basis-1/4 pb-8 sm:p-8;
  }

  .service-heading {
    @apply flex items-center gap-x-4 lg:text-xl font-semibold;
  }

  .service-desc {
    @apply text-sm md:text-base;
  }
</style>
