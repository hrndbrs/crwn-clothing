import { getProducts } from "../actions";
import { ProductsByCategory } from "@/utils/types";
import ProductCard from "@/components/ProductCard";
import "./shop-by-category.styles.scss";

async function ShopByCategory({ params }: { params: { category: string } }) {
	const { category } = params;
	const productsCategory = await getProducts<ProductsByCategory>(category);

	return (
		<>
			<h2 className="category-title">{category.toUpperCase()}</h2>
			<div className="category-container">
				{productsCategory.items.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</>
	);
}

export default ShopByCategory;
