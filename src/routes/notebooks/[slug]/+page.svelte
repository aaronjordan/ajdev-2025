<script lang="ts">
  import type { PageProps } from "./$types";
  import { getPostBySlug } from "@posts";
  import { formatDate } from "$lib/util/formatDate";
  import { error } from "@sveltejs/kit";
  import PostHeader from "@components/PostHeader.svelte";
  import Meta from "@components/Meta.svelte";

  const { data }: PageProps = $props();
  const post = getPostBySlug({ kind: "note", slug: data.slug });
  if (!post) error(404, "Notebook not found");
  const Contents = post.default;
</script>

<Meta title={post.metadata.title} description="hello world" />
<PostHeader
  title={post.metadata.title}
  date={formatDate(post.date)}
  ttr={post.metadata.ttr}
  tags={post.metadata.tags}
  theme="notebook"
/>
<Contents class="content notebook-content" />
