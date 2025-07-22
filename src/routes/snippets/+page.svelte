<script lang="ts">
  import type { PageProps } from "./$types";
  import { formatDate } from "$lib/util/formatDate";
  import Meta from "@components/Meta.svelte";

  const props: PageProps = $props();
</script>

<Meta title="Snippets" description="hello world" />
{#each props.data.groups as group}
  <section class="mb-8">
    <h2 class="text-ctp-green mb-4 text-lg font-semibold">
      ** {group.year} **
    </h2>
    <ul>
      {#each group.posts as post}
        <li>
          <a class="group" href={`./${post.slug}`}>
            <span class="text-ctp-subtext1"
              >{formatDate(post.date, "short")}</span
            >
            <span class="text-ctp-overlay1">::</span>
            <span class="group-hover:text-ctp-green">{post.title}</span>
          </a>
        </li>
      {/each}
    </ul>
  </section>
{/each}
