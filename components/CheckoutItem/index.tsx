import Image from "next/image";
import { CartItem, CartStore } from "@/utils/types";
import prependCurrency from "@/utils/helpers/prependCurrency";
import "./checkout-item.styles.scss";

function CheckoutItem({
	checkoutItem,
	removeItemFromCart,
	addItemToCart,
}: {
	checkoutItem: CartItem;
	removeItemFromCart: CartStore["removeItemFromCart"];
	addItemToCart: CartStore["addItemToCart"];
}) {
	const { id, name, imageUrl, price, quantity } = checkoutItem;

	function clearItem() {
		removeItemFromCart!(id, true);
	}

	function decreeaseItemQuantity() {
		removeItemFromCart!(id);
	}

	function increeaseItemQuantity() {
		addItemToCart!(checkoutItem);
	}

	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<Image src={imageUrl} alt={name} fill />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={decreeaseItemQuantity}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={increeaseItemQuantity}>
					&#10095;
				</div>
			</span>
			<span className="price">{prependCurrency(price)}</span>
			<div className="remove-button" onClick={clearItem}>
				&#10005;
			</div>
		</div>
	);
}

export default CheckoutItem;
