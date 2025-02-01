<script lang="ts">
  export let width: string = '32';
  export let height: string = '24';
</script>

<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  {width}
  {height}
  viewBox="0 0 900 600"
  preserveAspectRatio="xMidYMid slice"
>
  <g>
    <rect width="900" height="600" class="background" />
    <circle cx="450" cy="300" r="180" class="circle" />
  </g>
</svg>

<style>
  svg {
    @apply w-8 h-6;
  }
  .background {
    @apply fill-black dark:fill-white group-hover:fill-white dark:group-hover:fill-black transition-colors duration-300;
  }
  .circle {
    @apply fill-white dark:fill-black group-hover:fill-black dark:group-hover:fill-white transition-colors duration-300;
  }
</style>
