import { useRef } from "react";
import { Form } from "@unform/web";
import { Label } from "../../../../components/Label";
import { Button } from "../../../../components/Button";
import { CardContainer } from "./CardContainer";

export type MyAccessProps = {
	handleOpenPasswordModal: () => void;
};

export const MyAccess = (props: MyAccessProps) => {
	const { handleOpenPasswordModal } = props;
	const formRef = useRef(null);

	return (
		<CardContainer id="myAccess">
			<h1 className="text-gray-600 font-bold text-xl">Meu Acesso</h1>
			<Form
				ref={formRef}
				className="w-full pt-7 rounded grid grid-cols-1 gap-7"
				onSubmit={() => {}}
			>
				<div className="">
					<Label label="E-mail de cadastro" />
					<div className="px-4 flex rounded bg-gray-300 h-14 justify-between items-center">
						<span className="flex text-md font-medium text-gray-600">
							loiolamateus7@gmail.com
						</span>
						<button className="text-primary font-bold text-sm rounded px-4 focus:outline-none focus:ring-2 focus:ring-primary-border hover:text-primary-hover">
							ALTERAR
						</button>
					</div>
				</div>
				<div className="">
					<Label label="Senha" />
					<div className="px-4 flex rounded bg-gray-300 h-14 justify-between items-center">
						<span className="text-md font-medium text-gray-600">
							***************
						</span>
						<button
							onClick={handleOpenPasswordModal}
							className="text-primary font-bold text-sm rounded px-4 focus:outline-none focus:ring-2 focus:ring-primary-border hover:text-primary-hover"
						>
							ALTERAR
						</button>
					</div>
				</div>

				<div className="">
					<Label label="CPF" />
					<div className="px-4 flex rounded bg-gray-300 h-14 justify-between items-center">
						<span className="flex text-md font-medium text-gray-600 ">
							016.958.895-85
						</span>
						<button className="text-primary font-bold text-sm rounded px-4 outline-none focus:ring-2 focus:ring-primary-border hover:text-primary-hover">
							ALTERAR
						</button>
					</div>
				</div>

				<div className="w-[154px] h-12 flex items-center justify-start">
					<Button title="Salvar" type="submit" />
				</div>
			</Form>
		</CardContainer>
	);
};
