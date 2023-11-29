import { useRef } from "react";
import * as Yup from "yup";
import { Form } from "@unform/web";
import { Label } from "../../../../components/Label";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { ModalContainer } from "../../../../components/modal/ModalContainer";
import { ModalHeader } from "../../../../components/modal/ModalHeader";
import { ModalBody } from "../../../../components/modal/ModalBody";
import { ModalMyAccessProps } from ".";
import { UpdateUserPasswordRequest } from "../../../../services/requests/user/update-user.interface";
import { useAuthenticated } from "../../../../contexts/AuthContext";

const schema = Yup.object({
	currentPassword: Yup.string()
		.min(8, "Senha mínima de 8 caracteres")
		.required("Informe a senha atual"),
	newPassword: Yup.string()
		.min(8, "Senha mínima de 8 caracteres")
		.required("Informe a nova senha"),
	confirmPassword: Yup.string()
		.min(8, "Senha mínima de 8 caracteres")
		.required("Confirmar senha é obrigatória"),
});

export type ModalPasswordProps = {
	setShowModal: (props: ModalMyAccessProps) => void;
};

export const ModalPassword = ({ setShowModal }: ModalPasswordProps) => {
	const { user } = useAuthenticated();
	const formRef = useRef(null);

	const handleSubmit = async (data: UpdateUserPasswordRequest) => {
		try {
			await schema.validate(data, {
				abortEarly: false,
			});
			
			if (user) await updateUserPasswordService(user?.id, data);
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
			<ModalHeader title="ALTERAR SENHA" setShowModal={() => setShowModal({ open: false, type: '' })} />
			<ModalBody>
				<Form
					ref={formRef}
					className="my-3 w-full rounded grid grid-cols-1 gap-4"
					onSubmit={() => {}}
				>
					<div className="">
						<Label label="Senha atual" htmlFor="currentPassword" />
						<Input mask="" name="currentPassword" type="password" />
					</div>
					<div className="">
						<Label label="Nova senha" htmlFor="newPassword" />
						<Input mask="" name="newPassword" type="password" />
					</div>
					<div className="">
						<Label label="Confirmar senha" htmlFor="confirmPassword" />
						<Input mask="" name="confirmPassword" type="password" />
					</div>
					<div className="flex items-center mt-3 h-14 justify-end">
						<Button title="Confirmar" type="submit" />
					</div>
				</Form>
			</ModalBody>
		</ModalContainer>
	);
};
