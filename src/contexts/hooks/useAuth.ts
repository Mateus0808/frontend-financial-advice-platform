import { useEffect, useState } from "react";
import { apiSetup } from "../../services/api-setup.service";
import { UserResponse } from "../../services/user/type/user-response.interface";
import { useNavigate } from "react-router-dom";
import { userLoginService } from "../../services/user/auth-user.service";
import { getUserByIdService } from "../../services/user/get-user-by-id.service";
import { errorNotify, successNotify } from "../../utils/notify";
import { updateUserService } from "../../services/user/update-user.service";
import { UpdateEmailRequest } from "../../services/requests/user/update-user.interface";
import { updateUserEmailService } from "../../services/user/update-user-email.service";

export type SignInData = {
	email: string;
	password: string;
};

export function useAuth() {
	const navigate = useNavigate();
	const [user, setUser] = useState<UserResponse | any>();
	const [loading, setLoading] = useState(true);
	const isAuthenticated = !!user;

	useEffect(() => {
		(async function fetchData() {
			const token = localStorage.getItem("pafy_access_token");
			const userId = localStorage.getItem("pafy_userId");

			if (token && userId) {
				const response = await getUserByIdService(userId);
				setUser(response.data);

				return;
			}
			navigate("/login");
		})();
	}, [navigate]);

	async function isLoggedIn() {
		setLoading(true);
		const token = localStorage.getItem("pafy_access_token");

		if (token) return;
		navigate("/login");
		setLoading(false);
	}

	async function getUserById(userId: string) {
		try {
			if (userId) {
				const response = await getUserByIdService(userId);
				setUser(response.data);
			}
		} catch (err) {
			errorNotify("Erro ao recuperar usuário");
		}
	}

	async function updateUser(userId: string, data: Partial<UserResponse>) {
		try {
			const response = await updateUserService(userId, data);
			if (response.error) {
				errorNotify("Erro ao atualizar usuário");
				return;
			}
			setUser(response.data);
			successNotify("Usuário atualizado com sucesso");
		} catch (error: any) {
			errorNotify(error);
		}
	}

	async function updateUserEmail(
		userId: string,
		data: UpdateEmailRequest
	): Promise<boolean> {
		const response = await updateUserEmailService(userId, data);

		if (response.error && response.data === "Usuário não encontrado") {
			errorNotify(response.data);
			return false;
		} else if (response.error) {
			errorNotify("Erro ao atualizar e-mail");
			return false;
		}

		setUser(response.data);
		successNotify("Email atualizado com sucesso");
		return true;
	}

	async function signIn({ email, password }: SignInData) {
		setLoading(true);
		try {
			const response = await userLoginService({ email, password });
			if (response.error) {
				errorNotify(response.data);
				return;
			}
			const { token, user } = response.data;
			setUser(user);

			localStorage.setItem("pafy_access_token", token);
			localStorage.setItem("pafy_userId", user.id);

			apiSetup.defaults.headers.common.authorization = `Bearer ${token}`;
			navigate("/home");
		} catch (error) {
			console.log("error", error);
		} finally {
			setLoading(false);
		}
	}

	async function signOut() {
		localStorage.removeItem("pafy_access_token");
		localStorage.removeItem("pafy_userId");
		navigate("/login");
	}

	return {
		signIn,
		signOut,
		isAuthenticated,
		isLoggedIn,
		user,
		loading,
		setUser,
		updateUser,
		updateUserEmail,
		getUserById,
	};
}
