import Link from "next/link";
import { Category } from "@/utils/types";
import "./directory-item.styles.scss";

function DirecotryItem({ category }: { category: Category }) {
	const { title, imageUrl } = category;
	return (
		<Link href={`/shop/${title}`} className="directory-item-container">
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="directory-body-container">
				<h2>{title.toUpperCase()}</h2>
				<p>Shop Now</p>
			</div>
		</Link>
	);
}

export default DirecotryItem;
