import { DocumentData } from "firebase/firestore";

export interface DocumentModel extends DocumentData {
	id: string;
}

export default function mapDocToModel(doc: DocumentData): DocumentModel {
	return {
		id: doc.id,
		...doc.data(),
	};
}
