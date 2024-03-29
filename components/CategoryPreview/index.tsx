import { Suspense } from "react";
import Link from "next/link";
import { Product } from "@/utils/types";
import ProductCard from "../ProductCard";
import Spinner from "../Spinner";
import "./category-preview.styles.scss";

function CategoryPreview({
	title,
	products,
}: {
	title: string;
	products: Product[];
}) {
	return (
		<Suspense fallback={<Spinner />}>
			<h2>
				<span className="title">
					<Link href={`/shop/${title.toLowerCase()}`}>
						{title.toUpperCase()}
					</Link>
				</span>
			</h2>
			<div className="preview">
				{products.slice(0, 4).map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</Suspense>
	);
}

export default CategoryPreview;
