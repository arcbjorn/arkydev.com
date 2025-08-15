<script lang="ts">
  import { theme } from '$stores/theme';
  import { ETheme, EIconName, EButtonVariant } from '$lib/constants';
  import Button from '$components/common/Button.svelte';
  import Icon from '$components/common/Icon.svelte';

  const toggleTheme = () => {
    theme.update(t => (t === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT));
  };
</script>

<Button variant={EButtonVariant.TOGGLE} on:click={toggleTheme}>
  <Icon name={$theme === ETheme.LIGHT ? EIconName.MOON : EIconName.SUN} size={24} />
</Button>
