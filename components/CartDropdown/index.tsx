"use client";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/stores/cart";
import CartItem from "../CartItem";
import Button from "../Button";
import "./cart-dropdown.styles.scss";

function CartDropdown() {
	const router = useRouter();
	const cartItems = useCartStore((state) => state.cartItems);

	function navigateToCheckout() {
		router.push("/checkout");
	}

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.length === 0 ? (
					<span className="empty-message">Your cart is empty</span>
				) : (
					cartItems.map((item) => <CartItem key={item.id} item={item} />)
				)}
			</div>
			<Button onClick={navigateToCheckout}>CHECKOUT</Button>
		</div>
	);
}

export default CartDropdown;
