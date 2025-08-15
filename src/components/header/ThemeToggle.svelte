<script lang="ts">
  import { theme } from '$stores/theme';
  import Button from '$components/common/Button.svelte';
  import Icon from '$components/common/Icon.svelte';

  const toggleTheme = () => {
    theme.update(t => (t === 'light' ? 'dark' : 'light'));
  };
</script>

<Button variant="toggle" on:click={toggleTheme}>
  <Icon name={$theme === 'light' ? 'moon' : 'sun'} size={24} />
</Button>
