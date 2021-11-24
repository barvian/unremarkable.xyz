<script>
	import env from '$lib/env'

	export const includeSubscribe = true
	export const subscribeFormWidth = 550
</script>

<nav>
	<h1><a rel="logo" href="/">unremarkable</a></h1>
	{#if includeSubscribe}
		<button data-tf-slider={env.VITE_TF_ID} data-tf-width={subscribeFormWidth}>Get Notified ↗</button>
		<script src="//embed.typeform.com/next/embed.js"></script>
	{/if}
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	[rel="logo"] {
		font-size: 1.25rem;
	}

	a, button {
		appearance: none;
		-moz-appearance: none;
		-webkit-appearance: none;
		background: none;
		border: none;
		color: var(--black);
		cursor: pointer;
		font-weight: normal;
		font-size: 1.125rem;
		text-decoration: none;
		color: inherit;
	}
</style>