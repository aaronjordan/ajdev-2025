<script lang="ts">
  import { formatDate } from "$lib/util/fomatDate";
  import Counter from "../../components/Counter.svelte";
  import type { PageProps } from "./$types";

  const props: PageProps = $props();
</script>

<ul class="col-2">
  {#each props.data.index as post}
    <li>
      <a class="group" href={`./${post.slug}`}>
        <span class="text-zinc-300">{formatDate(post.date, "short")}</span>
        <span class="text-zinc-500">::</span>
        <span class="group-hover:text-blue-300">{post.title}</span>
      </a>
    </li>
  {/each}
</ul>
