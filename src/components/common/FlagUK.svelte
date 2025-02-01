<script lang="ts">
  export let width: string = '32';
  export let height: string = '24';
</script>

<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  {width}
  {height}
  viewBox="0 0 60 30"
  preserveAspectRatio="xMidYMid slice"
>
  <clipPath id="s">
    <path d="M0,0 v30 h60 v-30 z" />
  </clipPath>
  <g clip-path="url(#s)">
    <path d="M0,0 v30 h60 v-30 z" class="background" />
    <path d="M0,0 L60,30 M60,0 L0,30" class="diagonals-thick" />
    <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" class="diagonals-thin" />
    <path d="M30,0 v30 M0,15 h60" class="cross-thick" />
    <path d="M30,0 v30 M0,15 h60" class="cross-thin" />
  </g>
</svg>

<style>
  svg {
    @apply w-8 h-6;
  }
  .background {
    @apply fill-black dark:fill-white group-hover:fill-white dark:group-hover:fill-black transition-colors duration-300;
  }
  .diagonals-thick {
    @apply stroke-white dark:stroke-black group-hover:stroke-black dark:group-hover:stroke-white transition-colors duration-300;
    stroke-width: 6;
  }
  .diagonals-thin {
    @apply stroke-black dark:stroke-white group-hover:stroke-white dark:group-hover:stroke-black transition-colors duration-300;
    stroke-width: 4;
  }
  .cross-thick {
    @apply stroke-white dark:stroke-black group-hover:stroke-black dark:group-hover:stroke-white transition-colors duration-300;
    stroke-width: 10;
  }
  .cross-thin {
    @apply stroke-black dark:stroke-white group-hover:stroke-white dark:group-hover:stroke-black transition-colors duration-300;
    stroke-width: 6;
  }
</style>
