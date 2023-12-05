import { apiSetup } from "./api-setup.service";

const apiClient = () => {
	const token = localStorage.getItem("pafy_access_token");

	const api = apiSetup;
	if (token) {
		api.defaults.headers.common.authorization = `Bearer ${token}`;
	}

	api.interceptors.request.use((config) => {
		console.log("config: " + JSON.stringify(config));
		return config;
	});

	return api;
};

export default apiClient();
