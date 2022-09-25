<script lang="ts">
  import { EToken } from '$l18n/enums';

  // import { t } from '$l18n';
  // import { EToken } from '$l18n/enums';
</script>

<div id={EToken.SERVICES} class="services">
  <div>Service1</div>
  <div>Service2</div>
  <div>Service3</div>
  <div>Service4</div>
</div>

<style>
  .services {
    @apply w-full flex flex-col justify-around py-8 border-b-2 bg-white;
  }
</style>
