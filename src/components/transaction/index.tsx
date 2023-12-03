import { Summary } from "./Summary";
import { TransactionsTable } from "./TransactionsTable";
// import { useAuthenticated } from "../../contexts/AuthContext";

export function Transaction() {
	// const { isLoggedIn } = useAuthenticated();

	// useEffect(() => {
	// 	isLoggedIn();
	// }, [isLoggedIn]);

	return (
		<div className="flex min-h-screen">
			<main className="w-full mx-auto px-4 lg:px-8 py-10">
				<Summary />
				<TransactionsTable />
			</main>
		</div>
	);
}
