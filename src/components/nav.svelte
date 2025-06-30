<script lang="ts">
	/**
	 * Flat nav entries
	 */
	const entries = [
		{ class: 'hover:text-yellow-300', label: 'about', to: '/' },
		{ class: 'hover:text-green-300', label: 'notebooks', to: '/notebooks' },
		{ class: 'hover:text-sky-300', label: 'snippets', to: 'snippets' }
	];

	/**
	 * Social links menu
	 */
	const socials = [
		{ class: '', label: 'github', to: 'https://github.com/aaronjordan' },
		{ class: '', label: 'linkedin', to: 'https://www.linkedin.com/in/aaronjordandev/' },
		{ class: '', label: 'twitter', to: 'https://x.com/aaronjordandev' }
	];
</script>

<div class="col-2 flex justify-start gap-2">
	{#each entries as link}
		<a href={link.to} class={link.class}>
			<span class="text-zinc-500">&gt;</span>
			<span>{link.label}&nbsp;</span>
		</a>
	{/each}
	<div class="hover:text-indigo-300">
		<span class="text-zinc-500">&gt;</span>
		<span>social</span>
	</div>
</div>
