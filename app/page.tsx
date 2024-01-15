import { getAllCategories } from "./actions";
import Directory from "@/components/Directory";

export default async function Home() {
	const categories = await getAllCategories();
	return (
		<div>
			<Directory categories={categories} />
		</div>
	);
}
