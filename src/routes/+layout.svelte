<script lang="ts">
  import Nav from "../components/nav.svelte";
  import "../app.css";

  let { children } = $props();
</script>

<header
  class="grid grid-cols-[3ch_1fr_3ch] gap-[1ch] pt-6 pb-4 hover:cursor-default"
>
  <span class="col-1 justify-self-end text-zinc-500">/**</span>
  <span class="whitespace col-1 justify-self-end text-zinc-500">*&nbsp;</span>
  <div class="col-2 flex justify-between">
    <a href="/">
      <h1 class="hover:text-orange-300">
        <span class="text-zinc-500">@&nbsp;</span>aaronjordan.dev
      </h1>
    </a>
    <!-- <div class="hover:text-fuchsia-300">
			<span class="text-zinc-500">+</span>
			<span>settings</span>
		</div> -->
  </div>
  <span class="whitespace col-1 justify-self-end text-zinc-500">*&nbsp;</span>
  <Nav />
  <span class="col-1 justify-self-end text-zinc-500">*/</span>
</header>
<div>
  {@render children()}
</div>
