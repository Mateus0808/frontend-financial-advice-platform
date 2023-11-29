import { Route, Routes, useLocation } from "react-router-dom";
import { UserHome } from "../pages/user/UserHome";
import { UserSettings } from "../pages/settings";
import { UserInfo } from "../pages/settings/personalInformation";
import { FinancialEducation } from "../pages/financial_education";
import { Login } from "../pages/login/Login";
import { SignUp } from "../pages/signup";
import { AuthProvider } from "../contexts/AuthContext";
import { FinancialModulo } from "../pages/financial_education/Modulo";

export function UserRouter() {
	const location = useLocation();

	return (
		<AuthProvider>
			<Routes location={location} key={location.pathname}>
				<Route path="/dashboard" element={<UserHome />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/home/configuracoes" element={<UserSettings />} />
				<Route path="/home/perfil" element={<UserInfo />} />
				<Route
					path="/home/educacao-financeira"
					element={<FinancialEducation />}
				/>
				<Route
					path="/home/educacao-financeira/despesas"
					element={<FinancialModulo />}
				/>
			</Routes>
		</AuthProvider>
	);
}
