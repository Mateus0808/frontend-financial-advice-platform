import { useEffect, useState } from "react";
import { NewTransactionModal } from "./NewTransactionModal";
import { ActionMenu } from "./ActionMenu";
import { useTransactions } from "../../contexts/UseTransaction";
import { useAuthenticated } from "../../contexts/AuthContext";

export function TransactionsTable() {
	const { user } = useAuthenticated();
	const { transactions, fetchUserTransactions } = useTransactions();

	const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

	function handleOpenNewTransactionModal() {
		setIsNewTransactionOpen(true);
	}

	function handleCloseNewTransactionModal() {
		setIsNewTransactionOpen(false);
	}

	useEffect(() => {
		(async function fetchData() {
			if (user) await fetchUserTransactions(user?.id);
		})();
	}, [user]);

	return (
		<div className="mt-16 relative">
			<div className="w-full flex justify-end mb-4">
				<button
					className="text-base text-white bg-primary border-0 py-0 px-8 rounded h-12 transition ease-in-out"
					type="button"
					onClick={handleOpenNewTransactionModal}
				>
					Nova transação
				</button>
			</div>
			<NewTransactionModal
				isOpen={isNewTransactionOpen}
				onRequestClose={handleCloseNewTransactionModal}
			/>
			<div className="w-full grid grid-cols-5 rounded bg-gray-300">
				<span className="'text-['#969cb3'] py-4  px-8 text-left leading-6">
					Título
				</span>
				<span className="'text-['#969cb3'] py-4 px-8 text-left leading-6">
					Valor
				</span>
				<span className="'text-['#969cb3'] py-4 px-8 text-left leading-6">
					Categoria
				</span>
				<span className="'text-['#969cb3'] py-4 px-8 text-left leading-6">
					Data
				</span>
				<span className="'text-['#969cb3'] py-4 px-8 text-left leading-6">
					Opções
				</span>
			</div>
			{transactions.map((transaction) => (
				<div key={transaction.id} className="w-full relative grid grid-cols-5">
					<span className="px-8 py-4 border-0 text-['#363f5f']">
						{transaction.title}
					</span>
					<span
						className={`px-8 py-4 border-0 text-['#969cb3'] ${
							transaction.transactionType === "DEPOSIT"
								? "text-green-600"
								: "text-red-600"
						}`}
					>
						{new Intl.NumberFormat("pt-BR", {
							style: "currency",
							currency: "BRL",
						}).format(transaction.value)}
					</span>
					<span className="px-8 py-4 border-0 text-['#969cb3']">
						{transaction.category}
					</span>
					<span className="px-8 py-4 border-0 text-['#969cb3']">
						{new Intl.DateTimeFormat("pt-BR").format(
							new Date(transaction.createdAt)
						)}
					</span>
					<span>
						<ActionMenu />
					</span>
				</div>
			))}
		</div>
	);
}
