"use server";

import axiosClient, { ClientResponse } from "@/config/axios";
import { Product } from "@/components/ProductCard";

export async function getProducts() {
	const { data } = await axiosClient.get<
		ClientResponse<{ products: Product[] }>
	>("/products");

	return data.content!.products;
}
