<script>
  import Meta from "@components/Meta.svelte";
  import PostHeader from "@components/PostHeader.svelte";
</script>

<Meta title="Home" description="A really cool website" />

<main class="col-2 flex flex-col gap-6 text-zinc-200">
  <PostHeader title="Testing!" date="2025-08-02" />
  <p class="font-[Fira Sans]">
    Bun.js is an all-in-one JavaScript runtime, bundler, and package manager,
    designed for speed and efficiency. It's often seen as an alternative to
    Node.js, offering significant performance improvements in many areas.
  </p>
  <h1 class="font-bold text-emerald-300">&gt;&gt; Key Features</h1>
  <h2 class="text-emerald-300">:: More on Runtimes</h2>
  <h3 class="text-zinc-300">// V8 - the standard choice</h3>
  <p>Here's a breakdown of its key features and what makes it noteworthy:</p>
  <p>
    JavaScript Runtime: Like Node.js, Bun allows you to execute JavaScript code
    outside of a web browser. It's built on the JavaScriptCore engine (used by
    WebKit/Safari), which is generally known for its fast startup times and
    execution speed.
  </p>
  <p>
    This paragraph features a <code>bun add react react-router</code> as well as
    a <kbd>k</kbd> key
  </p>
  <ul>
    <li>This is a list item</li>
    <li>This is a list item</li>
    <li>This is a list item</li>
    <li>This is a list item</li>
  </ul>
  <p>
    Bundler: Bun includes a built-in bundler, similar to esbuild or Webpack, but
    integrated directly into the runtime. This means you don't need separate
    tools for bundling your code for production, streamlining the development
    process. It's designed to be extremely fast for bundling both JavaScript and
    TypeScript.
  </p>
  <p>
    Package Manager: Bun also functions as a npm-compatible package manager. It
    can install dependencies significantly faster than npm, yarn, or pnpm,
    thanks to its optimized architecture and efficient use of system resources.
    It has a bun install command that works much like npm install.
  </p>
  <p>
    TypeScript & JSX Support Out-of-the-Box: Bun natively supports TypeScript
    and JSX, meaning you don't need to configure additional compilers or loaders
    to use these technologies. This simplifies project setup and development.
  </p>
</main>

<footer class="h-30"></footer>
