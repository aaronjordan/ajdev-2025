<script lang="ts">
  import type { PageProps } from "./$types";
  import { getPostBySlug } from "@posts";
  import { formatDate } from "$lib/util/formatDate";
  import { error } from "@sveltejs/kit";
  import Meta from "@components/Meta.svelte";
  import PostHeader from "@components/PostHeader.svelte";

  const { data }: PageProps = $props();
  const post = getPostBySlug({ kind: "snippet", slug: data.slug });
  if (!post) error(404, "Snippet not found");
  const Contents = post.default;
</script>

<Meta title={post.metadata.title} description="hello world" />
<PostHeader
  title={post.metadata.title}
  date={formatDate(post.date)}
  ttr={post.metadata.ttr}
  tags={post.metadata.tags}
  theme="snippet"
/>
<Contents class="content snippet-content" />
