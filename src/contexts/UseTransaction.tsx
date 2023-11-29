import { createContext, ReactNode, useContext } from "react";

import { useTransaction } from "./hooks/useTransaction";
import { TransactionResponse } from "../services/transactions/type/response/transaction-response.interface";

type TransactionRequest = Omit<TransactionResponse, "id" | "createdAt">;

interface TransactionsProviderProps {
	children: ReactNode;
}

interface TransactionsContextProps {
	transactions: TransactionResponse[];
	setTransactions: React.Dispatch<React.SetStateAction<TransactionResponse | undefined>>;
	createTransaction: (transaction: TransactionRequest) => Promise<void>;
	fetchUserTransactions: (userId: number) => Promise<void>;
}

const TransactionsContext = createContext({} as TransactionsContextProps);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
	const {
		createTransaction,
		fetchUserTransactions,
		setTransactions,
		transactions,
	} = useTransaction();

	return (
		<TransactionsContext.Provider
			value={{ transactions, createTransaction, setTransactions, fetchUserTransactions }}
		>
			{children}
		</TransactionsContext.Provider>
	);
}

export function useTransactions() {
	const context = useContext(TransactionsContext);

	return context;
}
