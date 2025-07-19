import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: [vitePreprocess(), mdsvex({ extension: "md" })],
  kit: { 
    adapter: adapter(),
    alias: {
      "@components": "src/components",
      "@posts": "src/posts/index.ts",
    },
  },
  extensions: [".svelte", ".md"],
};

export default config;
