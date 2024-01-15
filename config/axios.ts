import axios from "axios";

const axiosClient = axios.create({
	baseURL: process.env.SERVER_URI,
});

export interface ClientResponse<T> {
	message: string;
	content?: T;
}

export default axiosClient;
