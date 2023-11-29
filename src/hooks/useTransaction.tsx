import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import apiClient from "../services/api-client.service";
import { errorNotify, successNotify } from "../utils/notify";
import { getTransactionsByUserId } from "../services/transactions/get-transactions-by-user-id.service";
import { useAuthenticated } from "../contexts/AuthContext";

interface TransactionResponse {
	id: number;
	title: string;
	transactionType: string;
	category: string;
	value: number;
	createdAt: Date;
}

type TransactionRequest = Omit<TransactionResponse, "id" | "createdAt">;
// type TransactionRequest = Pick<TransactionResponse, 'title' | 'amount' | 'category' | 'type'>

interface TransactionsProviderProps {
	children: ReactNode;
}

interface TransactionsContextProps {
	transactions: TransactionResponse[];
	createTransaction: (transaction: TransactionRequest) => Promise<void>;
	fetchUserTransactions: (userId: number) => Promise<void>;
}

const TransactionsContext = createContext({} as TransactionsContextProps);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
	const [transactions, setTransactions] = useState<TransactionResponse[]>([]);
	const { signOut } = useAuthenticated();

	async function fetchUserTransactions(userId: number) {
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
			"/transactions/create-transaction/mateus@gmail.com",
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

	return (
		<TransactionsContext.Provider
			value={{ transactions, createTransaction, fetchUserTransactions }}
		>
			{children}
		</TransactionsContext.Provider>
	);
}

export function useTransactions() {
	const context = useContext(TransactionsContext);

	return context;
}
