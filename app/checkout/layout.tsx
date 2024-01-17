"use client";

import StripeElements from "@/components/StripeElements";

function CheckoutLayout({ children }: { children: React.ReactNode }) {
	return <StripeElements>{children}</StripeElements>;
}

export default CheckoutLayout;
