import { AxiosError } from "axios";

import apiClient from "../api-client.service";
import { UserResponse } from "./type/user-response.interface";

interface ErrorResponse {
	message: string;
}

export const updateUserService = async (
	userId: string,
	data: Partial<UserResponse>
) => {
	try {
		const user = await apiClient.put(`/users/update/${userId}`, data);

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
