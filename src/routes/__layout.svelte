<script>
	import '../app.css'
</script>

<nav>
	<h1><a rel="logo" href="/">unremarkable</a></h1>
</nav>
<main>
	<slot />
</main>

<style>
	nav {
		margin-bottom: max(8vh, 4rem);
	}

	[rel="logo"] {
		color: var(--black);
		font-size: 1.25rem;
		font-weight: normal;
		text-decoration: none;
	}
</style>