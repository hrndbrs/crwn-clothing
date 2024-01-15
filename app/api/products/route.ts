import { NextResponse } from "next/server";
import { getCollection } from "@/config/firebase";

export async function GET() {
	try {
		const products = await getCollection("products");
		return NextResponse.json(
			{ message: "retrieved products", content: { products } },
			{ status: 200 }
		);
	} catch (error) {
		console.log(error, 12);
		return NextResponse.json(
			{ message: "failed to load products" },
			{ status: 500 }
		);
	}
}
