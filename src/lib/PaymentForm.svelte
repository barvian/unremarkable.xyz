<script context="module">
	import env from '$lib/env'
	import {loadStripe} from '@stripe/stripe-js'
	import {loadScript} from "@paypal/paypal-js"

	const stripeLoad = loadStripe(env.VITE_STRIPE_PUBLISHABLE_KEY)
	const paypalLoad = loadScript({ 'client-id': env.VITE_PAYPAL_CLIENT_ID })
</script>

<script>
	import { onMount } from 'svelte';

	let walletButton, paypalContainer, cardInput, walletEnabled

	onMount(async () => {
		const stripe = await stripeLoad
		const elements = stripe.elements();
		const paymentRequest = stripe.paymentRequest({
		  country: 'US',
		  currency: 'usd',
		  total: {
		    label: 'Demo total',
		    amount: 1099,
		  },
		  requestPayerName: true,
		  requestPayerEmail: true,
		})

		walletEnabled = Boolean(await paymentRequest.canMakePayment())
		if (walletEnabled) {
			const prButton = elements.create('paymentRequestButton', {
				paymentRequest
			})
			prButton.mount(walletButton);
			return
		}
		
		const card = elements.create('card');
		card.mount(cardInput);

		const paypal = await paypalLoad;
		paypal.Buttons({
			style: {
				layout: 'horizontal',
				tagline: false
			}
		}).render(paypalContainer)
	})
</script>

<div class="payment-form">
	<div hidden={walletEnabled === false} bind:this={walletButton}></div>
	<div hidden={walletEnabled !== false}>
		<div bind:this={paypalContainer}></div>
		<form>
			<div bind:this={cardInput}></div>
		</form>
	</div>
</div>

<style>
	.payment-form {
		max-width: 30rem;
		width: 100%;
	}
</style>