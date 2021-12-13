import { useState, useEffect } from 'react'
import { PaymentRequestButtonElement, useStripe } from '@stripe/react-stripe-js'

export default function PreOrder() {
	const stripe = useStripe()
	const [paymentRequest, setPaymentRequest] = useState(null)

	useEffect(() => {
	    if (!stripe) return

		const pr = stripe.paymentRequest({
			country: 'US',
			currency: process.env.NEXT_PUBLIC_PREORDER_CURRENCY_CODE.toLowerCase(),
			total: {
				label: 'Unremarkable pre-preorder',
				amount: process.env.NEXT_PUBLIC_PREORDER_AMOUNT * 100,
			},
			requestPayerName: true,
			requestPayerEmail: true
		})

		pr.canMakePayment().then(result => {
			if (result) setPaymentRequest(pr)
		})
	  }, [stripe])

	return (
		<>
			{paymentRequest && <PaymentRequestButtonElement />}
		</>
	)
}