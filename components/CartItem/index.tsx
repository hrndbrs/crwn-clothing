import Image from "next/image";
import { CartItem } from "@/utils/types";
import prependCurrency from "@/utils/helpers/prependCurrency";
import "./cart-item.styles.scss";

function CartItem({ item }: { item: CartItem }) {
	const { name, quantity, price } = item;

	return (
		<div className="cart-item-container">
			<div className="image-container">
				<Image src={item.imageUrl} alt={item.name} fill />
			</div>
			<div className="item-details">
				<span className="name">{name}</span>
				<span className="price">
					{quantity} &times; {prependCurrency(price)}
				</span>
			</div>
		</div>
	);
}

export default CartItem;
