import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { darken } from "polished";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useTransactions } from "../../hooks/useTransaction";

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

Modal.setAppElement("#root");

export function NewTransactionModal({
	isOpen,
	onRequestClose,
}: NewTransactionModalProps) {
	const { createTransaction } = useTransactions();

	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState(0);
	const [category, setCategory] = useState("");
	const [type, setType] = useState("");

	async function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault();

		await createTransaction({
			title,
			value: amount,
			category,
			transactionType: type,
		});

		setTitle("");
		setAmount(0);
		setCategory("");
		setType("");

		onRequestClose();
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="w-full max-w-xl bg-white shadow-2xl p-12 relative rounded"
		>
			<button
				type="button"
				onClick={onRequestClose}
				className="react-modal-close"
			>
				<img src={closeImg} alt="Fechar" />
			</button>

			<form onSubmit={handleCreateNewTransaction}>
				<h2 className="text-2xl  mb-8 text-gray-700 font-semibold text-center">
					NOVA TRANSAÇÃO
				</h2>

				<div className="flex flex-col gap-4">
					<input
						placeholder="Título"
						value={title}
						className="w-full px-4 h-14 rounded bg-gray-200 text-gray-600"
						onChange={(event) => setTitle(event.target.value)}
					/>

					<input
						type="number"
						value={amount}
						className="w-full px-4 h-14 rounded text-gray-600 bg-gray-200"
						onChange={(event) => setAmount(Number(event.target.value))}
					/>
				</div>

				<div className="my-4 grid grid-cols-2 gap-2">
					<button
						type="button"
						onClick={() => setType("DEPOSIT")}
						className={`h-14 border border-solid border-gray-300 rounded ${
							type === "DEPOSIT" ? "bg-green-300 opacity-90" : "transparent"
						} flex justify-center items-center transition hover:border-[${darken(
							0.1,
							"#d7d7d7"
						)}]`}
					>
						<img className="h-5 w-5" src={incomeImg} alt="Entrada" />
						<span className="inline-block ml-4 text-base text-gray-600">
							Entrada
						</span>
					</button>

					<button
						type="button"
						onClick={() => setType("WITHDRAW")}
						className={`h-14 border border-solid border-gray-300 rounded ${
							type === "WITHDRAW" ? "bg-red-300 opacity-90" : "transparent"
						} flex justify-center items-center transition hover:border-[${darken(
							0.1,
							"#d7d7d7"
						)}]`}
					>
						<img className="h-5 w-5" src={outcomeImg} alt="Saída" />
						<span className="inline-block ml-4 text-base text-gray-600">
							Saída
						</span>
					</button>
				</div>

				<input
					placeholder="Categoria"
					value={category}
					className="w-full px-6 h-14 rounded text-gray-600 bg-gray-200"
					onChange={(event) => setCategory(event.target.value)}
				/>

				<button
					className="w-full px-6 h-14 bg-primary text-white rounded mt-6 font-semibold transition ease-in-out hover:brightness-90"
					type="submit"
				>
					Adicionar
				</button>
			</form>
		</Modal>
	);
}
