import { useRef, useState } from "react";
import { Form } from "@unform/web";
import { Label } from "../../../../../components/Label";
import { CardContainer } from "../CardContainer";
import { ModalPassword } from "./ModalPassword";
import { ModalEmail } from "./ModalEmail";
import { ModalCPF } from "./ModalCPF";
import { MyAccessButton } from "./MyAccessButton";
import { useAuthenticated } from "../../../../../contexts/AuthContext";

export type ModalMyAccessProps = {
	open: boolean;
	type: "PASSWORD" | "EMAIL" | "CPF" | "";
};

export const MyAccess = () => {
	const { user } = useAuthenticated()
	const [isOpenModal, setIsOpenModal] = useState<ModalMyAccessProps>({
		open: false,
		type: "",
	});

	const handleModal = ({ open, type }: ModalMyAccessProps) => {
		setIsOpenModal({ open, type });
	};

	const formRef = useRef(null);

	return (
		<>
			{isOpenModal.open && isOpenModal.type === "EMAIL" && (
				<ModalEmail setShowModal={setIsOpenModal} />
			)}
			{isOpenModal.open && isOpenModal.type === "PASSWORD" && (
				<ModalPassword setShowModal={setIsOpenModal} />
			)}
			{isOpenModal.open && isOpenModal.type === "CPF" && (
				<ModalCPF setShowModal={setIsOpenModal} />
			)}

			<CardContainer id="myAccess">
				<h1 className="text-gray-600 font-bold text-xl">Meu Acesso</h1>
				<Form
					ref={formRef}
					className="w-full pt-7 rounded grid grid-cols-1 gap-7"
					onSubmit={() => {}}
				>
					<div className="">
						<Label label="E-mail de cadastro" />
						<MyAccessButton
							type="EMAIL"
							value={user?.email}
							handleModal={handleModal}
						/>
					</div>

					<div className="">
						<Label label="Senha" />
						<MyAccessButton type="PASSWORD" value="***************" handleModal={handleModal} />
					</div>

					<div className="">
						<Label label="CPF" />
						<MyAccessButton type="CPF" value="016.958.895-85" handleModal={handleModal} />
					</div>
				</Form>
			</CardContainer>
		</>
	);
};
