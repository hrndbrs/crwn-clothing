import axios from "axios";

const axiosClient = axios.create({
	baseURL: process.env.SERVER_URI,
});

export default axiosClient;
