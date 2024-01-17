"use server";

import axiosClient from "@/config/axios";
import { UserCredential } from "firebase/auth";

export async function addUserToDb(
	credential: UserCredential,
	additionals?: { [k: string]: string }
) {
	const payload = { credential, additionals };
	await axiosClient.post("/users", payload);
}
