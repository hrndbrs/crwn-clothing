import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

export interface DocumentModel extends DocumentData {
	id: string;
}

export default function mapDocToModel(
	doc: QueryDocumentSnapshot<DocumentData, DocumentData>
): DocumentModel {
	return {
		id: doc.id,
		...doc.data(),
	};
}
