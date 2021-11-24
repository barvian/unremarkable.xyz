<script context="module">
	import env from '$lib/env'
	import RenderAside from '$lib/Render/RenderAside.svelte'

	export const prerender = true

	const subscribeFormWidth = 550
</script>

<svelte:head>
	<title>The unremarkable</title>
	<script async src="//embed.typeform.com/next/embed.js"></script>
</svelte:head>

<RenderAside>
	<h1>A device that does more, so you can do less.</h1>
	<button data-tf-slider={env.VITE_TF_ID} data-tf-width={subscribeFormWidth}>
		Get Notified 
		<svg style="display: inline-block; margin-left: 0.35em;" width="auto" height="0.7em" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1.94559 20.976L0.0375977 19.068L13.6816 5.42398L15.5536 3.58798L7.77759 3.40798V0.599976L19.9096 1.10398L20.4136 13.236H17.6056L17.4256 5.49598L15.8056 7.11598L1.94559 20.976Z" fill="currentColor" />
		</svg>
	</button>
</RenderAside>