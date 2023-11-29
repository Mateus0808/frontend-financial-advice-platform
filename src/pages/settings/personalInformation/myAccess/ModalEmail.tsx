import { Form } from "@unform/web";
import { Label } from "../../../../components/Label";
import { useRef } from "react";
import * as Yup from "yup";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { ModalContainer } from "../../../../components/modal/ModalContainer";
import { ModalHeader } from "../../../../components/modal/ModalHeader";
import { ModalBody } from "../../../../components/modal/ModalBody";
import { ModalMyAccessProps } from ".";
import { UpdateEmailRequest } from "../../../../services/requests/user/update-user.interface";

const schema = Yup.object({
	currentEmail: Yup.string()
		.email("Informe um e-mail válido")
		.required("Email é obrigatório"),
	newEmail: Yup.string()
		.email("Informe um e-mail válido")
		.required("Confirme o e-mail"),
});

export type ModalEmailProps = {
	setShowModal: (props: ModalMyAccessProps) => void;
};

export const ModalEmail = ({ setShowModal }: ModalEmailProps) => {
	c
	const formRef = useRef(null);

	const handleSubmit = async (data: UpdateEmailRequest) => {
		try {
			await schema.validate(data, {
				abortEarly: false,
			});

			if (user) {
				await updateUserEmail(user?.id, data);
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
			<ModalHeader title="ATUALIZAR EMAIL" setShowModal={() => setShowModal({ open: false, type: '' })} />
			<ModalBody>
				<Form
					ref={formRef}
					className="my-3 w-full rounded grid grid-cols-1 gap-4"
					onSubmit={handleSubmit}
				>
					<div className="">
						<Label label="Email atual" htmlFor="currentEmail" />
						<Input mask="" name="currentEmail" type="email" />
					</div>
					<div className="">
						<Label label="Nova email" htmlFor="newEmail" />
						<Input mask="" name="newEmail" type="email" />
					</div>
					<div className="flex items-center mt-3 h-14 justify-end">
						<Button title="Confirmar" />
					</div>
				</Form>
			</ModalBody>
		</ModalContainer>
	);
};
