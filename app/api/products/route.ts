import { NextRequest, NextResponse } from "next/server";
import { getCollection } from "@/config/firebase";

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const { category } = Object.fromEntries(searchParams);

		const products = await getCollection("products", category);
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
