<script lang="ts">
  import { DropdownMenu } from "bits-ui";

  /**
   * Flat nav entries
   */
  const entries = [
    {
      class: "hover:text-ctp-yellow",
      groupClass: "group-hover:text-ctp-yellow",
      label: "about",
      to: "/about",
    },
    {
      class: "hover:text-ctp-green",
      groupClass: "group-hover:text-ctp-green",
      label: "notebooks",
      to: "/notebooks",
    },
    {
      class: "hover:text-ctp-sky",
      groupClass: "group-hover:text-ctp-sky",
      label: "snippets",
      to: "/snippets",
    },
  ];

  /**
   * Social links menu
   */
  const socials = [
    {
      class: "hover:text-ctp-flamingo",
      groupClass: "group-hover:text-ctp-flamingo",
      label: "github",
      to: "https://github.com/aaronjordan",
    },
    {
      class: "hover:text-ctp-blue",
      groupClass: "group-hover:text-ctp-blue",
      label: "linkedin",
      to: "https://www.linkedin.com/in/aaronjordandev/",
    },
    {
      class: "hover:text-ctp-lavender",
      groupClass: "group-hover:text-ctp-lavender",
      label: "twitter",
      to: "https://x.com/aaronjordandev",
    },
  ];
  let socialsOpen = $state(false);
</script>

<div class="col-2 flex flex-col flex-wrap items-start gap-2 sm:flex-row">
  {#each entries as link}
    <a href={link.to} class="group {link.class}">
      <span class="text-ctp-overlay1 {link.groupClass}">&gt;</span>
      <span>{link.label}&nbsp;</span>
    </a>
  {/each}
  <DropdownMenu.Root bind:open={socialsOpen}>
    <DropdownMenu.Trigger class="text-left">
      <div
        class="group hover:text-ctp-mauve {socialsOpen
          ? 'text-ctp-mauve-700'
          : ''}"
      >
        <span class="text-ctp-overlay1 group-hover:text-ctp-mauve">&gt;</span>
        <span>social</span>
      </div>
    </DropdownMenu.Trigger>
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        align="start"
        alignOffset={-16}
        sideOffset={8}
        class="border-ctp-surface0 bg-ctp-mantle flex flex-col gap-3 border p-4"
      >
        {#each socials as link}
          <DropdownMenu.Item>
            <a
              class="group {link.class}"
              href={link.to}
              rel="noopener noreferer"
              target="_blank"
            >
              <span class="text-ctp-overlay0 {link.groupClass}">&gt;</span>
              <span>{link.label}</span>
            </a>
          </DropdownMenu.Item>
        {/each}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
</div>
