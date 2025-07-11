<script lang="ts">
  import type { PageProps } from "./$types";
  import { getPostBySlug } from "../../../posts";
  import { error } from "@sveltejs/kit";

  const { data }: PageProps = $props();
  const post = getPostBySlug({ kind: "note", slug: data.slug });
  if (!post) error(404, "Notebook not found");
  const Contents = post.default;
</script>

<svelte:head>
  <title>{post.metadata.title}</title>
</svelte:head>
<main class="col-2">
  <p>Hello world</p>
  <Contents />
</main>
