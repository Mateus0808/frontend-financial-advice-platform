export type TransactionResponse = {
	id: number;
	title: string;
	transactionType: string;
	category: string;
	value: number;
	createdAt: Date;
}