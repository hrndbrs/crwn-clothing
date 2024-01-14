import { NextRequest, NextResponse } from "next/server";
import {
	signUpWithEmailAndPassword,
	createUserDocument,
} from "@/config/firebase";

export async function POST(req: NextRequest) {
	try {
		const { displayName, email, password } = await req.json();
		const credential = await signUpWithEmailAndPassword(email, password);
		await createUserDocument(credential.user, { displayName });
		const authToken = await credential.user.getIdToken();
		return NextResponse.json(
			{ message: "successfully created new user", authToken },
			{ status: 201 }
		);
	} catch (err) {
		console.log(err?.toString());
		return NextResponse.json({ error: "failed to load data" }, { status: 500 });
	}
}
