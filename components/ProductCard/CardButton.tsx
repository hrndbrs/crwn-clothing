"use client";
import { useCartStore } from "@/stores/cart";
import Button, { BUTTON_TYPE_CLASS } from "../Button";
import { Product } from "@/utils/types/index";

function CardButton({ product }: { product: Product }) {
	const addItemToCart = useCartStore((state) => state.addItemToCart);

	function addItem() {
		addItemToCart!(product);
	}

	return (
		<Button buttonType={BUTTON_TYPE_CLASS.INVERTED} onClick={addItem}>
			Add to cart
		</Button>
	);
}

export default CardButton;
