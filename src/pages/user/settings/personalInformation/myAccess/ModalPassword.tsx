import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Label } from "../../../../../components/Label";
import { Button } from "../../../../../components/Button";
import { Input } from "../../../../../components/Input";
import { ModalContainer } from "../../../../../components/modal/ModalContainer";
import { ModalHeader } from "../../../../../components/modal/ModalHeader";
import { ModalBody } from "../../../../../components/modal/ModalBody";
import { ModalMyAccessProps } from ".";
import { UpdateUserPasswordRequest } from "../../../../../services/requests/user/update-user.interface";
import { useAuthenticated } from "../../../../../contexts/AuthContext";
import { updateUserPasswordService } from "../../../../../services/user/update-user-password.service";
import { errorNotify, successNotify } from "../../../../../utils/notify";

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

	const initialValues: UpdateUserPasswordRequest = {
		currentPassword: "",
		newPassword: "",
		confirmPassword: "",
	};

	const handleSubmit = async (data: UpdateUserPasswordRequest) => {
		if (user) {
			const response = await updateUserPasswordService(user?.id, data);
			if (response.error) {
				errorNotify(response.data);
				return;
			}
			console.log("response.data: " + response.data);
			successNotify(response.data);
			setShowModal({ open: false, type: "" });
		}
	};

	return (
		<ModalContainer>
			<ModalHeader
				title="ALTERAR SENHA"
				setShowModal={() => setShowModal({ open: false, type: "" })}
			/>
			<ModalBody>
				<Formik
					initialValues={initialValues}
					validationSchema={schema}
					onSubmit={handleSubmit}
				>
					{({ errors, touched }) => (
						<Form className="my-3 w-full rounded grid grid-cols-1 gap-4">
							<div>
								<Label label="Senha atual" htmlFor="currentPassword" />
								<Input
									error={errors.currentPassword}
									touched={touched.currentPassword}
									name="currentPassword"
									type="password"
								/>
							</div>
							<div>
								<Label label="Nova senha" htmlFor="newPassword" />
								<Input
									error={errors.newPassword}
									touched={touched.newPassword}
									name="newPassword"
									type="password"
								/>
							</div>
							<div>
								<Label label="Confirmar senha" htmlFor="confirmPassword" />
								<Input
									error={errors.confirmPassword}
									touched={touched.confirmPassword}
									name="confirmPassword"
									type="password"
								/>
							</div>
							<div className="flex items-center mt-3 h-14 justify-end">
								<Button title="Confirmar" type="submit" />
							</div>
						</Form>
					)}
				</Formik>
			</ModalBody>
		</ModalContainer>
	);
};
