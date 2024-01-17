import { Suspense } from "react";
import { redirect } from "next/navigation";
import { getProducts } from "../actions";
import ProductCard from "@/components/ProductCard";
import Spinner from "@/components/Spinner";
import { ProductsByCategory } from "@/utils/types";
import "./shop-by-category.styles.scss";

async function ShopByCategory({ params }: { params: { category: string } }) {
	const { category } = params;
	const productsCategory = await getProducts<ProductsByCategory>(category);

	if (!productsCategory?.items) return redirect("/");

	return (
		<Suspense fallback={<Spinner />}>
			<h2 className="category-title">{category.toUpperCase()}</h2>
			<div className="category-container">
				{productsCategory.items.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</Suspense>
	);
}

export default ShopByCategory;
