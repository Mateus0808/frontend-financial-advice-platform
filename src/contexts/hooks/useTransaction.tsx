import { useState } from "react";
import apiClient from "../../services/api-client.service";
import { errorNotify, successNotify } from "../../utils/notify";
import { getTransactionsByUserId } from "../../services/transactions/get-transactions-by-user-id.service";
import { useAuthenticated } from "../AuthContext";
import { TransactionResponse } from "../../services/transactions/type/response/transaction-response.interface";

type TransactionRequest = Omit<TransactionResponse, "id" | "createdAt">;

export function useTransaction() {
	const [transactions, setTransactions] = useState<TransactionResponse[] | any>(
		[]
	);
	const { signOut, user } = useAuthenticated();

	async function fetchUserTransactions(userId: string) {
		const response = await getTransactionsByUserId(userId);
		if (response.statusCode === 200) {
			setTransactions(response.data);
			return;
		}
		if (response.statusCode === 401) {
			errorNotify("Autentique-se novamente!");
			await signOut();
			return;
		}
		errorNotify("Falha ao recuperar transações");
	}

	async function createTransaction(transactionRequest: TransactionRequest) {
		const response = await apiClient.post(
			`/transactions/create-transaction/${user?.email}`,
			{
				...transactionRequest,
				createdAt: new Date(),
			}
		);
		const transaction = response.data;
		if (transaction.error) {
			errorNotify("Erro ao adicionar transação");
			return;
		}

		successNotify("Transação criada com sucesso");
		setTransactions([...transactions, transaction]);
	}

	return {
		transactions,
		setTransactions,
		fetchUserTransactions,
		createTransaction,
	};
}
