"use client";

import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "@/utils/stripe";

function StripeElements({ children }: { children: React.ReactNode }) {
	return <Elements stripe={stripePromise}>{children}</Elements>;
}

export default StripeElements;
