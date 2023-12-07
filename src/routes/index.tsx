import {
	Route,
	createBrowserRouter,
	Outlet,
	createRoutesFromElements,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/about";
import { Login } from "../pages/login/Login";
import { SignUp } from "../pages/signup";
import { UserHome } from "../pages/user/UserHome";
import { Transaction } from "../components/transaction";
import { UserSettings } from "../pages/user/settings";
import { FinancialEducation } from "../pages/user/financial_education";
import { FinancialModulo } from "../pages/user/financial_education/Modulo";
import { Sidebar } from "../components/sidebar";
import { UserInfo } from "../pages/user/settings/personalInformation";
import { Navbar } from "../components/navbar";
import { AuthProvider } from "../contexts/AuthContext";
import { TransactionsProvider } from "../contexts/UseTransaction";
import { ExpenseModule } from "../pages/user/financial_education/Expense";

const AuthLayout = () => (
	<AuthProvider>
		<Outlet />
	</AuthProvider>
);

const TransactionLayout = () => (
	<TransactionsProvider>
		<Outlet />
	</TransactionsProvider>
);

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<AuthLayout />}>
			<Route element={<Navbar />}>
				<Route index element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<SignUp />} />
			</Route>

			<Route element={<TransactionLayout />}>
				<Route path="/home" element={<Sidebar />}>
					<Route index element={<UserHome />} />
					<Route path="configuracoes" element={<UserSettings />} />
					<Route path="configuracoes/perfil" element={<UserInfo />} />
					<Route path="transacoes" element={<Transaction />} />
					<Route path="educacao-financeira" element={<FinancialEducation />} />
					<Route
						path="educacao-financeira/renda"
						element={<FinancialModulo />}
					/>
					<Route
						path="educacao-financeira/despesas"
						element={<ExpenseModule />}
					/>
				</Route>
			</Route>
		</Route>
	)
);
