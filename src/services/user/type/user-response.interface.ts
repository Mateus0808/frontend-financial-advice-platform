export interface TransactionResponse {
	id: number;
	title: string;
	value: number;
	category: string;
	transactionType: "DEPOSIT" | "WITHDRAW";
	createdAt: Date;
	updatedAt: Date;
}

export interface UserResponse {
	id: number;
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	birthDate: Date;
	gender: "MALE" | "FEMALE" | "OTHER";
	educationLevel: string;
	annualIncome: number;
	roles: ["ROLE_ADMIN" | "ROLE_USER"];
	transactions: TransactionResponse[];
}
