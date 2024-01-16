"use server";

import axiosClient, { ClientResponse } from "@/config/axios";
import { ProductsByCategory } from "@/utils/types";

export async function getProducts<T = ProductsByCategory[]>(category?: string) {
	let path = "/products";

	if (category) path += "?" + new URLSearchParams({ category }).toString();

	const { data } = await axiosClient.get<ClientResponse<{ products: T }>>(path);

	return data.content!.products;
}
