<script lang="ts">
  import type { PageProps } from "./$types";
  import { getPostBySlug } from "../../../posts";
  import { error } from "@sveltejs/kit";

  const { data }: PageProps = $props();
  const post = getPostBySlug({ kind: "snippet", slug: data.slug });
  if (!post) error(404, "Snippet not found");
  const Contents = post.default;
</script>

<svelte:head>
  <title>{post.metadata.title}</title>
</svelte:head>
<main class="col-2">
  <div class="content flex flex-col gap-4">
    <Contents />
  </div>
</main>
