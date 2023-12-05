import apiClient from "../api-client.service";

export const getTransactionsByUserId = async (userId: string) => {
	try {
		const transactions = await apiClient.get(`/transactions/user/${userId}`);

		return {
			data: transactions.data,
			error: false,
			statusCode: transactions.status,
		};
	} catch (error: any) {
		return {
			data: "Falha ao recuperar transações",
			error: true,
			statusCode: error.response.status,
		};
	}
};
