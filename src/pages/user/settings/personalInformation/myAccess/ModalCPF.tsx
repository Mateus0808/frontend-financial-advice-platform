import * as Yup from "yup";
import { Label } from "../../../../../components/Label";
import { Button } from "../../../../../components/Button";
import { Input } from "../../../../../components/Input";
import { ModalContainer } from "../../../../../components/modal/ModalContainer";
import { ModalHeader } from "../../../../../components/modal/ModalHeader";
import { ModalBody } from "../../../../../components/modal/ModalBody";
import { ModalMyAccessProps } from ".";
import { UpdateCPFRequest } from "../../../../../services/requests/user/update-user.interface";
import { Formik, Form } from "formik";
import { useAuthenticated } from "../../../../../contexts/AuthContext";

const schema = Yup.object({
	cpf: Yup.string().email("Informe o CPF").required("CPF é obrigatório"),
	reason: Yup.string().required("Informe o motivo"),
});

export type ModalEmailProps = {
	setShowModal: (props: ModalMyAccessProps) => void;
};

export const ModalCPF = ({ setShowModal }: ModalEmailProps) => {
	const { user } = useAuthenticated()
	const initialValues: UpdateCPFRequest = {
		cpf: "",
		reason: "",
	};

	const handleSubmit = async (data: UpdateCPFRequest) => {
		try {
			// await updateUserCPF(user?.id, data);
		} catch (err: any) {
			throw new Error(err);
		}
	};

	return (
		<ModalContainer>
			<ModalHeader
				title="ALTERAR CPF"
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
								<Label label="CPF" htmlFor="cpf" />
								<Input
									error={errors.cpf}
									touched={touched.cpf}
									placeholder="000.000.000-00"
									name="cpf"
									type="text"
								/>
							</div>
							<div>
								<Label label="Informe o motivo" htmlFor="reason" />
								<Input
									error={errors.reason}
									touched={touched.reason}
									placeholder="Descreva o motivo..."
									name="reason"
									type="text"
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
