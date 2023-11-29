import { ModalMyAccessProps } from ".";

type MyAccessButtonProps = {
	value: string;
	type: "PASSWORD" | "EMAIL" | "CPF" | "";
	handleModal: (props: ModalMyAccessProps) => void;
}

export const MyAccessButton = ({ type, value, handleModal }: MyAccessButtonProps) => (
	<div className="px-4 flex rounded bg-gray-300 h-14 justify-between items-center">
		<span className="text-md font-medium text-gray-600">{value}</span>
		<button
			onClick={() => handleModal({ type, open: true })}
			className="text-primary uppercase font-bold text-sm rounded px-4 focus:outline-none focus:ring-2 focus:ring-primary-border hover:text-primary-hover"
		>
			Alterar
		</button>
	</div>
);
