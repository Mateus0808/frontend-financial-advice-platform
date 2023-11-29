export type UpdateEmailRequest = {
	currentEmail: string;
	newEmail: string;
}

export type UpdateCPFRequest = {
	cpf: string;
	reason: string;
}

export type UpdateUserPasswordRequest = {
	currentPassword: string;
	newPassword: string;
	confirmPassword: string;
}