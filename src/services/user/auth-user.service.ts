import { apiSetup } from "../api-setup.service";

export const userLoginService = async (data: any) => {
	try {
		const user = await apiSetup.post("/auth/login", data);

		return {
			data: user.data,
			error: false,
		};
	} catch (error: any) {
		console.log("Login error", error);
		if (error.response.data.message === "Bad credentials") {
			return {
				data: "Email ou senha inválido",
				error: true,
			};
		}
		return {
			data: "Erro ao fazer login",
			error: true,
		};
	}
};
