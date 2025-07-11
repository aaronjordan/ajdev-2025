import { error, type Load } from "@sveltejs/kit";
import { getPostBySlug, listPostsByPrefix } from "../../../posts";
import type { EntryGenerator } from "./$types";

export const prerender = true;

export const entries: EntryGenerator = () => {
  const all = listPostsByPrefix({ kind: "snippet" });
  return all.map((note) => ({ slug: note.metadata.slug }));
};

export const load: Load = ({ params }) => {
  if (!params.slug) error(400, "No post specified");

  // Need to refetch at SSG, as the component itself can't be
  // serialized (even though it's not actually transmitted?).
  const post = getPostBySlug({ kind: "snippet", slug: params.slug });
  if (post) return { slug: params.slug };

  error(404, "Notebook not found");
};
