import env from '$lib/env'
import Stripe from 'stripe'
const stripe = new Stripe(env.VITE_STRIPE_SECRET_KEY)

export async function post({ body: { paymentMethodType } }) {
	try {
	    const paymentIntent = await stripe.paymentIntents.create({
			payment_method_types: [paymentMethodType],
			amount: 1999,
			currency: 'usd'
		})

	    // Send publishable key and PaymentIntent details to client
	    return { body: { clientSecret: paymentIntent.client_secret } }
	} catch (e) {
		return {
			status: 400,
			body: { error: { message: e.message } }
		}
	}
}