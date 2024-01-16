import Image from "next/image";
import prependCurrency from "@/utils/helpers/prependCurrency";
import { Product } from "@/utils/types";
import CardButton from "./CardButton";
import "./product-card.styles.scss";

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
			<CardButton product={product} />
		</div>
	);
}

export default ProductCard;
