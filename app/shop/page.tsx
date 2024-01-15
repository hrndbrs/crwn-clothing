import { getProducts } from "./actions";
import ProductCard from "@/components/ProductCard";
import "./shop.styles.scss";

async function Shop() {
	const products = await getProducts();
	return (
		<div className="products-container">
			{products.map((product) => (
				<ProductCard product={product} />
			))}
		</div>
	);
}

export default Shop;
