<script lang="ts">
  interface Props {
    title: string;
    date: string;
    ttr?: string;
    tags?: string[];
  }

  const { title, date, ttr, tags }: Props = $props();
</script>

<header class="border-ctp-surface1 mb-2 flex flex-col gap-2 border-b pb-3">
  <h1 class="text-ctp-sapphire mb-1 text-4xl font-bold tracking-tight">
    {title}
  </h1>
  <div class="text-ctp-subtext0">:: {date}{ttr ? ` :: ${ttr}` : ""}</div>
  {#if tags && tags.length > 0}
    <div class="text-ctp-subtext0">
      ::
      {#each tags as t}
        <span class="mr-3">#{t}</span>
      {/each}
    </div>
  {/if}
</header>
