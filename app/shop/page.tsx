import { getProducts } from "./actions";
import CategoryPreview from "@/components/CategoryPreview";

async function Shop() {
	const productsByCategory = await getProducts();
	return (
		<div className="category-preview-container">
			{productsByCategory.map((category) => {
				const { title, items } = category;
				return <CategoryPreview key={title} title={title} products={items} />;
			})}
		</div>
	);
}

export default Shop;
