"use server";
import { cookies } from "next/headers";
import { userSignUpSchema, userSignInSchema } from "@/utils/schema";
import axiosClient from "@/config/axios";
import { UserCredential } from "firebase/auth";

const cookieStore = cookies();

export async function userSignUp(formData: FormData) {
	const form = Object.fromEntries(formData.entries());

	if (form.password !== form.confirmPassword) return;

	const { displayName, email, password } = userSignUpSchema.parse(form);
	const payload = { displayName, email, password };

	const {
		data: { authToken },
	} = await axiosClient.post("/user/signUp", payload);

	cookieStore.set("auth_token", authToken);
}

export async function signInWithEmailAndPassword(formData: FormData) {
	const form = Object.fromEntries(formData.entries());
	const { email, password } = userSignInSchema.parse(form);

	const payload = { email, password };

	const {
		data: { authToken },
	} = await axiosClient.post("/user/signIn", payload);

	cookieStore.set("auth_token", authToken);
}

export async function googleSignIn(
	credential: UserCredential,
	authToken: string
) {
	await axiosClient.post("/user/googleSignIn", { credential });
	cookieStore.set("auth_token", authToken);
}
