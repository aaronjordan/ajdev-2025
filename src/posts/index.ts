import z from "zod";

interface ListPostsArgs {
  kind: "note" | "snippet";
}

interface GetPostArgs {
  kind: "note" | "snippet";
  slug: string;
}

const PathRegex = /.*\/(\w+)-(\d{6})/;

const PostSchema = z.object({
  default: z.function(z.tuple([z.any(), z.any()])).returns(z.any()),
  metadata: z.object({
    slug: z.string(),
    title: z.string(),
  }),
});

const allPosts = import.meta.glob("./*.md", { eager: true });

interface Post extends ReturnType<typeof PostSchema.parse> {
  kind: string;
  date: string;
}

const listPostsCache: Record<string, Post[]> = {};

/**
 * Gets the posts with the prefix argument.
 */
export function listPostsByPrefix(args: ListPostsArgs) {
  if (args.kind in listPostsCache) return listPostsCache[args.kind];

  const res: Post[] = [];
  for (const [path, post] of Object.entries(allPosts)) {
    const [_, kind, date] = PathRegex.exec(path)!;
    if (kind !== args.kind) continue;
    const next = PostSchema.parse(post);
    res.push({ ...next, kind, date });
  }
  return res;
}

/**
 * Finds the post described by `args`, returning `undefined` if not found.
 */
export function getPostBySlug(args: GetPostArgs) {
  const collection = listPostsByPrefix(args);
  return collection.find((post) => post.metadata.slug === args.slug);
}
