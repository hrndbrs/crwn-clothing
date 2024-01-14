import CategoryItem, { type Category } from "../CategoryItem/CategoryItem";
import "./directory.styles.scss";

function Directory({ categories }: { categories: Category[] }) {
	return (
		<div className="directory-container">
			{categories.map((category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
	);
}

export default Directory;
