<script lang="ts">
  import { DropdownMenu } from "bits-ui";

  /**
   * Flat nav entries
   */
  const entries = [
    { class: "hover:text-yellow-300", label: "about", to: "/" },
    { class: "hover:text-green-300", label: "notebooks", to: "/notebooks" },
    { class: "hover:text-sky-300", label: "snippets", to: "/snippets" },
  ];

  /**
   * Social links menu
   */
  const socials = [
    { class: "", label: "github", to: "https://github.com/aaronjordan" },
    {
      class: "",
      label: "linkedin",
      to: "https://www.linkedin.com/in/aaronjordandev/",
    },
    { class: "", label: "twitter", to: "https://x.com/aaronjordandev" },
  ];
  let socialsOpen = $state(false);
</script>

<div class="col-2 flex flex-wrap justify-start gap-2">
  {#each entries as link}
    <a href={link.to} class={link.class}>
      <span class="text-zinc-500">&gt;</span>
      <span>{link.label}&nbsp;</span>
    </a>
  {/each}
  <DropdownMenu.Root bind:open={socialsOpen}>
    <DropdownMenu.Trigger>
      <div class="hover:text-indigo-300 {socialsOpen ? 'text-indigo-300' : ''}">
        <span class="text-zinc-500">&gt;</span>
        <span>social</span>
      </div>
    </DropdownMenu.Trigger>
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        align="start"
        alignOffset={-16}
        sideOffset={8}
        class="flex flex-col gap-3 border border-zinc-600 bg-zinc-800 p-4"
      >
        {#each socials as link}
          <DropdownMenu.Item>
            <a href={link.to} rel="noopener noreferer" target="_blank">
              <span class="text-zinc-500">&gt;</span>
              <span>{link.label}</span>
            </a>
          </DropdownMenu.Item>
        {/each}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
</div>
