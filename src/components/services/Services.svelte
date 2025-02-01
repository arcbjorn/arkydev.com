<script lang="ts">
  import { EToken } from '$l18n/enums';
  import { t } from '$l18n';
  import { SERVICES } from '$constants';

  import CompleteSolutionIcon from '$components/services/icons/CompleteSolutionIcon.svelte';
  import ConsultingIcon from '$components/services/icons/ConsultingIcon.svelte';
  import SystemArchitectureIcon from '$components/services/icons/SystemArchitectureIcon.svelte';
  import TeamIcon from '$components/services/icons/TeamIcon.svelte';

  import Service from '$components/services/Service.svelte';

  const icons = {
    ConsultingIcon,
    SystemArchitectureIcon,
    TeamIcon,
    CompleteSolutionIcon
  };

  $: services = SERVICES.map(service => ({
    icon: icons[service.icon as keyof typeof icons],
    heading: $t(service.name),
    description: $t(service.description),
    actionText: $t(service.action),
    completeSolution: service.completeSolution
  }));
</script>

<div id={EToken.SERVICES} class="services">
  {#each services as service}
    <Service icon={service.icon} heading={service.heading} actionText={service.actionText}>
      {#if service.completeSolution}
        <ul class="list-disc pl-4">
          {@html service.description}
        </ul>
      {:else}
        {service.description}
      {/if}
    </Service>
  {/each}
</div>

<style>
  .services {
    @apply w-full p-8 flex items-start flex-wrap border-b-2 bg-white dark:bg-stone-950 dark:text-white dark:border-gray-700;
  }
</style>
