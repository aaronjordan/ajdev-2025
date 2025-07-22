<script lang="ts">
  import { formatDate } from "$lib/util/formatDate";
  import Meta from "@components/Meta.svelte";
  import type { PageProps } from "./$types";

  const props: PageProps = $props();
</script>

<Meta title="Notebooks" description="hello world" />
<div class="col-2">
  {#each props.data.groups as group}
    <section class="mb-8">
      <h2 class="mb-4 text-lg font-semibold text-ctp-sky">
        ** {group.year} **
      </h2>
      <ul>
        {#each group.posts as post}
          <li>
            <a class="group" href={`./${post.slug}`}>
              <span class="text-ctp-subtext1">{formatDate(post.date, "short")}</span
              >
              <span class="text-ctp-overlay1">::</span>
              <span class="group-hover:text-ctp-sky">{post.title}</span>
            </a>
          </li>
        {/each}
      </ul>
    </section>
  {/each}
</div>
