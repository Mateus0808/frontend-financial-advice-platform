import { Form } from "@unform/web";
import * as Yup from "yup";
import { Label } from "../../../../components/Label";
import { useRef } from "react";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { ModalContainer } from "../../../../components/modal/ModalContainer";
import { ModalHeader } from "../../../../components/modal/ModalHeader";
import { ModalBody } from "../../../../components/modal/ModalBody";
import { ModalMyAccessProps } from ".";
import { UpdateCPFRequest } from "../../../../services/requests/user/update-user.interface";
import { useAuthenticated } from "../../../../contexts/AuthContext";

const schema = Yup.object({
	cpf: Yup.string()
		.email("Informe o CPF")
		.required("CPF é obrigatório"),
	reason: Yup.string()
		.required("Informe o motivo"),
});

export type ModalEmailProps = {
	setShowModal: (props: ModalMyAccessProps) => void;
};

export const ModalCPF = ({ setShowModal }: ModalEmailProps) => {
	const { user } = useAuthenticated()
	const formRef = useRef(null);

	const handleSubmit = async (data: UpdateCPFRequest) => {
		try {
			await schema.validate(data, {
				abortEarly: false,
			});

			if (user) {
				await updateUserCPF(user?.id, data);
			}
		} catch (err) {
			if (err instanceof Yup.ValidationError) {
				console.log(err);
				const errorMessages = {};

				err.inner.forEach((error) => {
					if (error) errorMessages[error?.path] = error.message;
				});

				formRef.current.setErrors(errorMessages);
			}
		}
	};

	return (
		<ModalContainer>
			<ModalHeader title="ALTERAR CPF" setShowModal={() => setShowModal({ open: false, type: '' })} />
			<ModalBody>
				<Form
					ref={formRef}
					className="my-3 w-full rounded grid grid-cols-1 gap-4"
					onSubmit={() => {}}
				>
					<div className="">
						<Label label="CPF" htmlFor="cpf" />
						<Input mask="999.999.999-99" placeholder="000.000.000-00" name="cpf" type="text" />
					</div>
					<div className="">
						<Label label="Informe o motivo" htmlFor="reason" />
						<Input mask="" placeholder="Descreva o motivo..." name="reason" type="text" />
					</div>
					<div className="flex items-center mt-3 h-14 justify-end">
						<Button title="Confirmar" />
					</div>
				</Form>
			</ModalBody>
		</ModalContainer>
	);
};
