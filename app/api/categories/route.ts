import { NextResponse } from "next/server";
import { getCollection } from "@/config/firebase";

export async function GET() {
	try {
		const categories = await getCollection("categories");
		return NextResponse.json(
			{ message: "retrieved categories", content: { categories } },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "failed to load categories", error },
			{ status: 500 }
		);
	}
}
