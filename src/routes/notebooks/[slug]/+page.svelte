<script lang="ts">
  import type { PageProps } from "./$types";
  import { getPostBySlug } from "../../../posts";
  import { error } from "@sveltejs/kit";

  const { data }: PageProps = $props();
  const post = getPostBySlug({ kind: "note", slug: data.slug });
  if (!post) error(404, "Notebook not found");
  const Contents = post.default;
</script>

<p>Hello world</p>
<Contents />
