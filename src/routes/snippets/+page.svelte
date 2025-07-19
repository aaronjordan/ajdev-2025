<script lang="ts">
  import { formatDate } from "$lib/util/formatDate";
  import { pageTitle } from "$lib/util/title";
  import type { PageProps } from "./$types";

  const props: PageProps = $props();
</script>

<svelte:head>
  <title>{pageTitle("Snippets")}</title>
</svelte:head>

<div class="col-2">
  {#each props.data.groups as group}
    <section class="mb-8">
      <h2 class="mb-4 text-lg font-semibold text-emerald-300">
        ** {group.year} **
      </h2>
      <ul>
        {#each group.posts as post}
          <li>
            <a class="group" href={`./${post.slug}`}>
              <span class="text-zinc-300">{formatDate(post.date, "short")}</span
              >
              <span class="text-zinc-500">::</span>
              <span class="group-hover:text-blue-300">{post.title}</span>
            </a>
          </li>
        {/each}
      </ul>
    </section>
  {/each}
</div>
