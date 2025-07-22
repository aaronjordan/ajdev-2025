<script lang="ts">
  import Nav from "@components/Nav.svelte";
  import "../app.css";

  let { children } = $props();
</script>

<header
  class="grid grid-cols-[0_1fr_0] gap-[1ch] pt-6 pb-4 hover:cursor-default md:grid-cols-[3ch_1fr_3ch]"
>
  <div class="col-2 flex justify-between">
    <a href="/">
      <h1 class="group hover:text-ctp-peach">
        <span class="text-ctp-overlay1 group-hover:text-ctp-peach">@&nbsp;</span
        >aaronjordan.dev
      </h1>
    </a>
  </div>
  <Nav />
</header>

<main>
  <article
    class="grid grid-cols-[0_1fr_0] gap-[1ch] pt-4 pb-4 hover:cursor-default md:grid-cols-[3ch_1fr_3ch]"
  >
    {@render children()}
  </article>
</main>
