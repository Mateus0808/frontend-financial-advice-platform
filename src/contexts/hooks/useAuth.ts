import { useEffect, useState } from "react";
import { apiSetup } from "../../services/api-setup.service";
import { UserResponse } from "../../services/user/type/user-response.interface";
import { useNavigate } from "react-router-dom";
import { userLoginService } from "../../services/user/auth-user.service";
import { getUserByIdService } from "../../services/user/get-user-by-id.service";
import { errorNotify, successNotify } from "../../utils/notify";
// import { errorNotify } from '../../utils/notify';

export type SignInData = {
	email: string;
	password: string;
};

export function useAuth() {
	const navigate = useNavigate();
	const [user, setUser] = useState<UserResponse>();
	const [loading, setLoading] = useState(true);
	const isAuthenticated = !!user;

	useEffect(() => {
		setLoading(true);
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
		setLoading(false);
	}, []);

	async function isLoggedIn() {
		setLoading(true);
		const token = localStorage.getItem("pafy_access_token");

		if (token) return;
		navigate("/login");
		setLoading(false);
	}

	async function getUserById() {
		try {
			const userId = localStorage.getItem("pafy_userId");
			if (userId) {
				const response = await getUserByIdService(userId);
				setUser(response.data);
			}
		} catch (err) {
			errorNotify("Erro ao recuperar usuário");
		}
	}

	async function signIn({ email, password }: SignInData) {
		setLoading(true);
		try {
			const response = await userLoginService({ email, password });
			if (response.error) {
				errorNotify("Erro ao fazer login");
				return;
			}
			const { token, ...rest } = response.data;
			setUser(rest);

			localStorage.setItem("pafy_access_token", token);
			localStorage.setItem("pafy_userId", rest.id);

			apiSetup.defaults.headers.common.authorization = `Bearer ${token}`;
			successNotify("Usuário logado com sucesso");
			navigate("/dashboard");
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
		getUserById,
	};
}
