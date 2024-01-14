import { NextRequest, NextResponse } from "next/server";
import { UserCredential } from "firebase/auth";
import { createUserDocument } from "@/config/firebase";

export async function POST(req: NextRequest) {
	try {
		const {
			credential,
			additionals,
		}: { credential: UserCredential; additionals?: { [k: string]: string } } =
			await req.json();

		const { user, created, error } = await createUserDocument(
			credential.user,
			additionals
		);

		if (error) throw error;

		if (created)
			return NextResponse.json(
				{ message: "created user successfully", user },
				{ status: 201 }
			);

		return NextResponse.json(
			{ message: "user already exists", user },
			{ status: 200 }
		);
	} catch (err) {
		console.log(err, 7);
		return NextResponse.json({ message: "error" }, { status: 500 });
	}
}
