import { Label } from "../../../../../components/Label";
import * as Yup from "yup";
import { Button } from "../../../../../components/Button";
import { Input } from "../../../../../components/Input";
import { ModalContainer } from "../../../../../components/modal/ModalContainer";
import { ModalHeader } from "../../../../../components/modal/ModalHeader";
import { ModalBody } from "../../../../../components/modal/ModalBody";
import { ModalMyAccessProps } from ".";
import { UpdateEmailRequest } from "../../../../../services/requests/user/update-user.interface";
import { Formik, Form } from "formik";
import { useAuthenticated } from "../../../../../contexts/AuthContext";

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
	const { user, updateUserEmail } = useAuthenticated()
	const initialValues: UpdateEmailRequest = {
		currentEmail: "",
		newEmail: "",
	};

	const handleSubmit = async (data: UpdateEmailRequest) => {
		if(user) {
			await updateUserEmail(user?.id, data);
		}
	};

	return (
		<ModalContainer>
			<ModalHeader
				title="ATUALIZAR EMAIL"
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
							<div className="">
								<Label label="Email atual" htmlFor="currentEmail" />
								<Input
									error={errors.currentEmail}
									touched={touched.currentEmail}
									name="currentEmail"
									type="email"
								/>
							</div>
							<div className="">
								<Label label="Novo email" htmlFor="newEmail" />
								<Input
									error={errors.newEmail}
									touched={touched.newEmail}
									name="newEmail"
									type="email"
								/>
							</div>
							<div className="flex items-center mt-3 h-14 justify-end">
								<Button title="Confirmar" />
							</div>
						</Form>
					)}
				</Formik>
			</ModalBody>
		</ModalContainer>
	);
};
