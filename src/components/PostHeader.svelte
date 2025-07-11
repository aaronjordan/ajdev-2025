<script lang="ts">
  const title = "10 Tips to Improve TypeScript Readability";
  const date = "2025-06-29";
  const ttr = "6 min read";
  const tags = ["nodejs", "bun", "svelte", "typescript"];
</script>

<header class="mb-2 flex flex-col gap-2 border-b border-zinc-700 pb-3">
  <h1 class="mb-1 text-4xl font-bold tracking-tight text-emerald-300">
    {title}
  </h1>
  <div class="text-zinc-500">:: {date} :: {ttr}</div>
  {#if tags && tags.length > 0}
    <div class="text-zinc-500">
      ::
      {#each tags as t}
        <span class="mr-3">#{t}</span>
      {/each}
    </div>
  {/if}
</header>
