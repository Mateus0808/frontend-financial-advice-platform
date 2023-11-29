import { useEffect } from "react";
import { Sidebar } from "../Sidebar";
import { Summary } from "./Summary";
import { TransactionsTable } from "./TransactionsTable";
import { useAuthenticated } from "../../contexts/AuthContext";

export function Dashboard() {
	const { isLoggedIn } = useAuthenticated();

	useEffect(() => {
		isLoggedIn();
	}, [isLoggedIn]);

	return (
		<div className="flex min-h-screen">
			<Sidebar />
			<main className="max-w-[1180px] w-full mx-auto px-4 lg:px-8 py-10">
				<Summary />
				<TransactionsTable />
			</main>
		</div>
	);
}
