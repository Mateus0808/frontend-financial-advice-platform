import apiClient from "../api-client.service";

export const getTransactionsByUserId = async (userId: number) => {
	try {
		const transactions = await apiClient.get(
			`/transactions/user/transactions/${userId}`
		);

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
