"use client";

import { CardElement } from "@stripe/react-stripe-js";
import usePayment from "@/hooks/usePayment";
import Button, { BUTTON_TYPE_CLASS } from "../Button";
import "./payment-form.styles.scss";

function PaymentForm({ amount }: { amount: number }) {
	const { paymentHandler } = usePayment(amount);

	return (
		<div className="payment-form-container">
			<form action={paymentHandler} className="form-container">
				<h2>Credit Card Payment: </h2>
				<CardElement />
				<Button buttonType={BUTTON_TYPE_CLASS.INVERTED} hasLoadingState={true}>
					Pay now
				</Button>
			</form>
		</div>
	);
}

export default PaymentForm;
