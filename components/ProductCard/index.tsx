import Image from "next/image";
import Button, { BUTTON_TYPE_CLASS } from "../Button";
import prependCurrency from "@/utils/helpers/prependCurrency";
import "./product-card.styles.scss";

export type Product = {
	id: string | number;
	name: string;
	price: number;
	imageUrl: string;
};

function ProductCard({ product }: { product: Product }) {
	const { name, price, imageUrl } = product;

	return (
		<div className="product-card-container">
			<div className="content">
				<Image src={imageUrl} alt={name} fill style={{ objectFit: "cover" }} />
			</div>
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{prependCurrency(price)}</span>
			</div>
			<Button buttonType={BUTTON_TYPE_CLASS.INVERTED}>Add to cart</Button>
		</div>
	);
}

export default ProductCard;
