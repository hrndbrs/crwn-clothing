"use server";
import axiosClient, { ClientResponse } from "@/config/axios";
import { Category } from "@/utils/types";

export async function getAllCategories() {
	const { data } = await axiosClient.get<
		ClientResponse<{ categories: Category[] }>
	>("/categories");

	return data.content!.categories;
}
