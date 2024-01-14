import { NextRequest, NextResponse } from "next/server";
import { emailSignIn, FirebaseError } from "@/config/firebase";

export async function POST(req: NextRequest) {
	try {
		const { email, password } = await req.json();
		const credential = await emailSignIn(email, password);
		const authToken = await credential.user.getIdToken();
		return NextResponse.json(
			{ message: "signed in with email and password successfully", authToken },
			{ status: 200 }
		);
	} catch (err) {
		console.log(err?.toString());
		if (err instanceof FirebaseError) {
			switch (err.code) {
				case "auth/wrong-password":
				case "auth/user-not-found":
					return NextResponse.json(
						{ error: "Invalid Email/Password" },
						{ status: 400 }
					);
			}
		}
		return NextResponse.json({ error: "failed to load data" }, { status: 500 });
	}
}
