import { AxiosError } from "axios";

import { apiSetup } from "../api-setup.service";

interface ErrorResponse {
	message: string;
}

export const createUserService = async (data: any) => {
	try {
		data.birthDate = new Date(data.birthDate);
		const user = await apiSetup.post("/auth/register-user", data);

		return {
			data: user.data,
			error: false,
		};
	} catch (error: any) {
		const axiosError = error as AxiosError<ErrorResponse>;
		let errorMessage: string;

		if (axiosError.response) {
			errorMessage = axiosError.response.data.message;
		} else if (axiosError.request) {
			errorMessage = "Erro de conexão";
		} else {
			errorMessage = axiosError.message;
		}

		return {
			data: errorMessage,
			error: true,
		};
	}
};
