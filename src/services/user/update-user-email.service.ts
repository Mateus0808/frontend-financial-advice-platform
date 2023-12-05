import { AxiosError } from "axios";

import apiClient from "../api-client.service";
import { UpdateEmailRequest } from "../requests/user/update-user.interface";

interface ErrorResponse {
	message: string;
}

export const updateUserEmailService = async (
	userId: string,
	data: UpdateEmailRequest
) => {
	try {
		const user = await apiClient.put(`/users/update-email/${userId}`, data);

		return {
			data: user.data,
			error: false,
		};
	} catch (error: any) {
		console.log("erro udpatea email", error);
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
