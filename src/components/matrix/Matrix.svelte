<script lang="ts">
  import { onMount } from 'svelte';
  import { t } from '$l18n';
  import { EToken } from '$l18n/enums';

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const fontSize = 14;
  let columns: number;
  let drops: number[] = [];

  function initMatrix() {
    const width = window.innerWidth;
    const height = 300; // Fixed height for the section

    canvas.width = width;
    canvas.height = height;

    columns = Math.floor(width / fontSize);
    drops = Array(columns).fill(1);

    ctx = canvas.getContext('2d')!;
    ctx.font = `${fontSize}px monospace`;
  }

  function draw() {
    // Use white fade in light mode, black fade in dark mode
    const fadeColor = document.documentElement.classList.contains('dark')
      ? 'rgba(0, 0, 0, 0.02)'
      : 'rgba(255, 255, 255, 0.02)';

    ctx.fillStyle = fadeColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Use black in light mode, white in dark mode
    ctx.fillStyle = document.documentElement.classList.contains('dark') ? '#FFF' : '#000';

    drops.forEach((y, i) => {
      if (Math.random() > 0.9) {
        const char = characters[Math.floor(Math.random() * characters.length)] as string;
        const x = i * fontSize;
        ctx.fillText(char, x, y * fontSize);
      }

      if (y * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      // @ts-ignore
      drops[i]++;
    });

    requestAnimationFrame(draw);
  }

  onMount(() => {
    initMatrix();
    draw();

    window.addEventListener('resize', initMatrix);
    return () => window.removeEventListener('resize', initMatrix);
  });
</script>

<div class="matrix-container">
  <div class="content-wrapper">
    <div class="title dark:text-white">
      {$t(EToken.MATRIX)}
    </div>
    <canvas bind:this={canvas} />
  </div>
</div>

<style>
  .matrix-container {
    @apply relative w-full border-b-2 dark:border-gray-700 bg-white dark:bg-stone-950;
  }

  .content-wrapper {
    @apply flex flex-col items-center justify-center;
  }

  .title {
    @apply absolute top-1/2 -translate-y-1/2 w-full text-center sm:text-2xl z-10;
  }

  canvas {
    @apply w-full;
  }
</style>
