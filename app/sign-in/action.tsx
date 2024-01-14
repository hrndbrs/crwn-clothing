"use server";
import { cookies } from "next/headers";
import { userSignUpSchema } from "@/utils/schema";
import axiosClient from "@/config/axios";
import { UserCredential } from "firebase/auth";

const cookieStore = cookies();

export async function userSignUp(formData: FormData) {
	const form = Object.fromEntries(formData.entries());

	if (form.password !== form.confirmPassword) return;

	const { displayName, email, password } = userSignUpSchema.parse(form);

	const payload = { displayName, email, password };

	await axiosClient.post("/user/signUp", payload);
}

export async function googleSignIn(
	credential: UserCredential,
	authToken: string
) {
	await axiosClient.post("/user/googleSignIn", { credential });
	cookieStore.set("auth_token", authToken);
}
