"use server";

import axiosClient, { ClientResponse } from "@/config/axios";

export async function stripePayment(total: { amount: number }) {
	const { data } = await axiosClient.post<
		ClientResponse<{ clientSecret: string }>
	>("/payment", total);

	return data.content!.clientSecret;
}
