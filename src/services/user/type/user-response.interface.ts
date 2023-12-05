import { TransactionResponse } from "../../transactions/type/response/transaction-response.interface";

export interface UserResponse {
	id: string;
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	birthDate: Date;
	gender: "MALE" | "FEMALE" | "OTHER" | "";
	educationLevel: string;
	annualIncome: number;
	roles: ["ROLE_ADMIN" | "ROLE_USER"];
	transactions: TransactionResponse[];
}
