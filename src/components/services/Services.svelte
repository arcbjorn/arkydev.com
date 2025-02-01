<script lang="ts">
  import type { SvelteComponent, ComponentType, ComponentProps } from 'svelte';
  import { EToken } from '$l18n/enums';
  import { t } from '$l18n';

  import CompleteSolutionIcon from '$components/services/icons/CompleteSolutionIcon.svelte';
  import ConsultingIcon from '$components/services/icons/ConsultingIcon.svelte';
  import SystemArchitectureIcon from '$components/services/icons/SystemArchitectureIcon.svelte';
  import TeamIcon from '$components/services/icons/TeamIcon.svelte';

  import Service from '$components/services/Service.svelte';

  interface IServiceBlock {
    icon: ComponentType<SvelteComponent>;
    heading: string;
    description: string;
    actionText: string;
    completeSolution?: boolean;
  }

  const services: IServiceBlock[] = [
    {
      icon: ConsultingIcon,
      heading: $t(EToken.CONSULTING),
      description: $t(EToken.CONSULTING_DESC),
      actionText: $t(EToken.CONSULTING_ACTION)
    },
    {
      icon: SystemArchitectureIcon,
      heading: $t(EToken.ARCHITECTURE),
      description: $t(EToken.ARCHITECTURE_DESC),
      actionText: $t(EToken.ARCHITECTURE_ACTION)
    },
    {
      icon: TeamIcon,
      heading: $t(EToken.TEAM),
      description: $t(EToken.TEAM_DESC),
      actionText: $t(EToken.TEAM_ACTION)
    },
    {
      icon: CompleteSolutionIcon,
      heading: $t(EToken.COMPLETE),
      description: $t(EToken.COMPLETE_DESC),
      actionText: $t(EToken.COMPLETE_ACTION),
      completeSolution: true
    }
  ];
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
    @apply w-full p-8 flex items-start flex-wrap border-b-2 bg-white;
  }
</style>
