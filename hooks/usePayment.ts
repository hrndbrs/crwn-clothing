import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useAuthStore } from "@/stores/auth";
import { useCartStore } from "@/stores/cart";
import { stripePayment } from "@/app/checkout/actions";

function usePayment(amount: number) {
	const user = useAuthStore((state) => state.currentUser);
	const clearCart = useCartStore((state) => state.clearCart!);
	const stripe = useStripe();
	const elements = useElements();

	async function paymentHandler() {
		if (!(stripe && elements)) return;

		const clientSecret = await stripePayment({ amount: amount * 100 });
		const cardDetails = elements.getElement(CardElement);

		if (cardDetails === null) return;

		await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: cardDetails,
				billing_details: {
					name: user?.displayName || "crown_customer",
				},
			},
		});

		clearCart();
	}

	return { paymentHandler };
}

export default usePayment;
