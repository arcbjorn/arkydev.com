<script lang="ts">
  import { t } from '$l18n';
  import { EToken } from '$l18n/enums';

  const companies = [
    'Alphabet',
    'IBM',
    'Binance',
    'Chime',
    'Hitachi',
    'Microsoft',
    'TD Canada Trust'
  ];
</script>

<div class="flex flex-col py-12 gap-y-12 border-b-2">
  <div class="self-center text-center sm:text-2xl px-6">
    {$t(EToken.PARTNERS)}
  </div>
  <div class="partners">
    <div class="line">
      {#each companies as company}
        <div class="company px-12">{company}</div>
      {/each}
    </div>
    <div class="line">
      {#each companies as company}
        <div class="company px-12">{company}</div>
      {/each}
    </div>
  </div>
</div>

<style>
  .line {
    @apply flex items-center justify-center min-w-full;
    flex: 0 0 auto;
    animation: scroll linear 15s infinite;
    animation-play-state: running;
    animation-direction: normal;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .partners {
    @apply w-full font-semibold text-2xl sm:text-4xl flex items-center overflow-hidden;
  }
</style>
