"use client";

import { useEffect } from "react";
import { useCartStore } from "@/stores/cart";
import CheckoutItem from "@/components/CheckoutItem";
import prependCurrency from "@/utils/helpers/prependCurrency";
import "./checkout.styles.scss";

function Checkout() {
	const { cartItems, removeItemFromCart, addItemToCart } = useCartStore(
		(state) => state
	);

	const total = cartItems.reduce(
		(prev, curr) => prev + curr.quantity * curr.price,
		0
	);

	useEffect(() => {
		useCartStore.persist.rehydrate();
	}, []);

	return (
		<div className="checkout-container">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((item) => (
				<CheckoutItem
					key={item.id}
					checkoutItem={item}
					removeItemFromCart={removeItemFromCart}
					addItemToCart={addItemToCart}
				/>
			))}
			<span className="total">Total: {prependCurrency(total)}</span>
		</div>
	);
}

export default Checkout;
