"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useCartStore } from "@/stores/cart";
import CartSVG from "@/public/icons/shopping-bag.svg";
import "./cart-icon.styles.scss";

function CartIcon() {
	const { setIsOpen: toggleIsOpen, cartItems } = useCartStore(
		({ setIsOpen, cartItems }) => ({ setIsOpen, cartItems })
	);

	const count = cartItems.reduce((prev, curr) => prev + curr.quantity, 0);

	useEffect(() => {
		useCartStore.persist.rehydrate();
	}, []);

	return (
		<div className="cart-icon-container" onClick={toggleIsOpen}>
			<Image className="shopping-icon" src={CartSVG} alt="cart-icon" />
			<span className="item-count">{count}</span>
		</div>
	);
}

export default CartIcon;
