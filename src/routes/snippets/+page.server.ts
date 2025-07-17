import type { Load } from "@sveltejs/kit";
import { listPostsByPrefix, groupByYear } from "../../posts";

export const prerender = true;
export const trailingSlash = "always";

export const load: Load = () => {
  const notes = listPostsByPrefix({ kind: "snippet" });
  const posts = notes.map((note) => ({ ...note.metadata, date: note.date }));
  const groups = groupByYear(posts);
  return { groups };
};
