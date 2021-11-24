<script>
	import Render from './Render.svelte'
</script>

<div>
	<Render />
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-flow: column nowrap;
		align-items: flex-start;
	}

	:global(.render) {
		width: 180% !important;
		max-width: 60rem;
		margin-top: max(4vh, 2rem);
		position: relative;
		right: -9%;
		order: 1;
	}

	@media (min-width: 960px) {
		div {
			display: block;
		}

		:global(.render) {
			shape-outside: polygon(27% 37%, 83% 37%, 100% 48%, 100% 100%, 0 100%, 0 48%);
			shape-margin: 5%;
			float: right;
			margin-right: -50%;
			transform: translateY(10%);
			right: 0;
			width: 100% !important;
		}

		:global(.payment-form) {
			max-width: 40% !important;
		}
	}
</style>