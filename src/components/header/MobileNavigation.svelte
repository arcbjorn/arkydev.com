<script lang="ts">
  let open = false;

  const toggleMenu = () => (open = !open);
</script>

<div class="relative py-3 sm:max-w-xl mx-auto">
  <button
    class="w-10 h-10 relative focus:outline-none bg-white border-black"
    class:border-2={!open}
    on:click={toggleMenu}
  >
    <span class="sr-only">Open main menu</span>

    <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      <span
        aria-hidden="true"
        class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
        class:rotate-45={open}
        class:-translate-y-1.5={!open}
      />
      <span
        aria-hidden="true"
        class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
        class:opacity-0={open}
      />
      <span
        aria-hidden="true"
        class="block absolute h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out"
        class:-rotate-45={open}
        class:translate-y-1.5={!open}
      />
    </div>
  </button>
</div>
