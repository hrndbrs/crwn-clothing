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
				{ message: "created user successfully", content: { user } },
				{ status: 201 }
			);

		return NextResponse.json(
			{ message: "user already exists", content: { user } },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json({ message: "error", error }, { status: 500 });
	}
}
