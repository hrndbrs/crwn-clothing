import { getAllCategories } from "@/app/actions";
import DirectoryItem from "../DirectoryItem";
import "./directory.styles.scss";

async function Directory() {
	const categories = await getAllCategories();

	return (
		<div className="directory-container">
			{categories.map((category) => (
				<DirectoryItem key={category.id} category={category} />
			))}
		</div>
	);
}

export default Directory;
