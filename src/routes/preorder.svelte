<script context="module">
	export const prerender = true
</script>

<script>
	import RenderAside from '$lib/Render/RenderAside.svelte'
	import PaymentForm from '$lib/PaymentForm.svelte'
</script>

<svelte:head>
	<title>Preorder the unremarkable</title>
</svelte:head>

<RenderAside>
	<h1>The best tool for reading.</h1>
	<h2>Preorder for $1,000 USD.</h2>
	<PaymentForm />
</RenderAside>
