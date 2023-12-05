import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Button } from "../../../../components/Button";
import { Label } from "../../../../components/Label";
import { useState } from "react";
import { UserInput } from "../../../../components/user/UserInput";
import { UserResponse } from "../../../../services/user/type/user-response.interface";
import { CardContainer } from "./CardContainer";
import { Select } from "../../../../components/Select";
import { LoadingButton } from "../../../../components/LoadingButton";
import { useAuthenticated } from "../../../../contexts/AuthContext";

const schema = Yup.object({
	firstName: Yup.string()
		.min(2, "Mínimo de 2 caracteres")
		.required("Nome é obrigatório"),
	lastName: Yup.string().required("Sobrenome é obrigatório"),
	username: Yup.string()
		.min(2, "Nome de usuário mínimo de 2 caracteres")
		.max(12, "Nome de usuário máximo de 12 caracteres")
		.required("Nome de usuário é obrigatório"),
	gender: Yup.string().required("Selecione o gênero"),
});

type UserRequest = Pick<
	UserResponse,
	"firstName" | "lastName" | "username" | "gender"
>;

export const PersonalInfo = () => {
	const [loading, setLoading] = useState(false);
	const { user, updateUser } = useAuthenticated();

	const initialValues: UserRequest = {
		firstName: user?.firstName || "",
		lastName: user?.lastName || "",
		username: user?.username || "",
		gender: user?.gender || "",
	};

	const handleSubmit = async (data: UserRequest) => {
		setLoading(true);
		if (user) await updateUser(user?.id, data);
		setLoading(false);
	};

	return (
		<>
			{user ? (
				<CardContainer id="personalInfo">
					<h1 className="text-gray-600 font-bold text-xl">
						Informações Pessoal
					</h1>
					<Formik
						initialValues={initialValues}
						validationSchema={schema}
						onSubmit={handleSubmit}
					>
						{({ errors, touched }) => (
							<Form className="w-full pt-7 rounded grid grid-cols-1 gap-7 lg:grid-cols-2">
								<div className="">
									<Label label="Nome" htmlFor="firstName" />
									<UserInput
										error={errors.firstName}
										touched={touched.firstName}
										name="firstName"
										type="text"
									/>
								</div>
								<div className="">
									<Label label="Sobrenome" htmlFor="lastName" />
									<UserInput
										error={errors.lastName}
										touched={touched.lastName}
										type="text"
										name="lastName"
									/>
								</div>
								<div>
									<Label label="Nome de usuário" htmlFor="username" />
									<UserInput
										error={errors.username}
										touched={touched.username}
										type="text"
										name="username"
									/>
								</div>
								<div>
									<Label label="Gênero" htmlFor="gender" />
									<Select
										error={errors.gender}
										touched={touched.gender}
										name="gender"
									>
										<option value="">Selecione o gênero...</option>
										<option value="MALE">Masculino</option>
										<option value="FEMALE">Feminino</option>
										<option value="OTHER">Outro</option>
									</Select>
								</div>
								<div className="w-[154px] h-12 flex items-center justify-start">
									{!loading ? (
										<Button title="Salvar" type="submit" />
									) : (
										<LoadingButton />
									)}
								</div>
							</Form>
						)}
					</Formik>
				</CardContainer>
			) : (
				<div>Carregando...</div>
			)}
		</>
	);
};
