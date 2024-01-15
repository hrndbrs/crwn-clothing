import Image from "next/image";
import { useCartStore } from "@/stores/cart";
import ShoppingIcon from "@/public/icons/shopping-bag.svg";
import "./cart-icon.styles.scss";

function CartIcon() {
	const toggleIsOpen = useCartStore((state) => state.setIsOpen);

	return (
		<div className="cart-icon-container" onClick={toggleIsOpen}>
			<Image className="shopping-icon" src={ShoppingIcon} alt="cart-icon" />
			<span className="item-count">0</span>
		</div>
	);
}

export default CartIcon;
