<script lang="ts">
  import type { PageProps } from "./$types";
  import { getPostBySlug } from "@posts";
  import { pageTitle } from "$lib/util/title";
  import { formatDate } from "$lib/util/formatDate";
  import { error } from "@sveltejs/kit";
  import PostHeader from "@components/PostHeader.svelte";

  const { data }: PageProps = $props();
  const post = getPostBySlug({ kind: "note", slug: data.slug });
  if (!post) error(404, "Notebook not found");
  const Contents = post.default;
</script>

<svelte:head>
  <title>{pageTitle(post.metadata.title)}</title>
</svelte:head>
<main class="col-2">
  <div class="content flex flex-col gap-4">
    <PostHeader 
      title={post.metadata.title} 
      date={formatDate(post.date)} 
      ttr={post.metadata.ttr}
      tags={post.metadata.tags}
    />
    <Contents />
  </div>
</main>
