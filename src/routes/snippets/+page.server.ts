import type { Load } from "@sveltejs/kit";
import { listPostsByPrefix } from "../../posts";

export const prerender = true;
export const trailingSlash = "always";

export const load: Load = () => {
  const notes = listPostsByPrefix({ kind: "snippet" });
  const index = notes.map((note) => ({ ...note.metadata, date: note.date }));
  return { index };
};
