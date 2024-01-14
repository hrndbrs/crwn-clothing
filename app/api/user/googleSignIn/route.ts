import { NextRequest, NextResponse } from "next/server";
import { createUserDocument } from "@/config/firebase";
import { UserCredential } from "firebase/auth";

export async function POST(req: NextRequest) {
	try {
		const { credential }: { credential: UserCredential } = await req.json();

		await createUserDocument(credential.user);

		return NextResponse.json(
			{ message: "successfully created new user" },
			{ status: 201 }
		);
	} catch (err) {
		console.log(err?.toString());
		return NextResponse.json({ error: "failed to load data" }, { status: 500 });
	}
}
