import Image from "next/image";
import "./categories.styles.scss";

export type Category = {
	id: string | number;
	title: string;
	imageUrl: string;
};

function CategoryItem({ category }: { category: Category }) {
	return (
		<div className="category-container">
			<Image
				src={category.imageUrl}
				alt={category.title}
				className="background-image"
			/>
			<div className="category-body-container">
				<h2>{category.title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
}

export default CategoryItem;
