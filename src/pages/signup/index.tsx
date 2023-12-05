import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useNavigate, Link } from "react-router-dom";

import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Button } from "../../components/Button";
import { createUserService } from "../../services/user/create-user.service";
import { errorNotify, successNotify } from "../../utils/notify";
import { CreateUserParams } from "../../services/user/type/create-user.interface";

const schema = Yup.object({
	firstName: Yup.string()
		.min(2, "Nome, mínimo de 2 caracteres")
		.required("Nome é obrigatório"),
	lastName: Yup.string().required("O sobrenome é obrigatório"),
	username: Yup.string()
		.min(2, "Nome de usuário mínimo de 2 caracteres")
		.max(12, "Nome de usuário máximo de 12 caracteres")
		.required("O nome de usuário é obrigatório"),
	gender: Yup.string().required("Selecione o gênero"),
	birthDate: Yup.string().required("Data de nascimento é obrigatório"),
	educationLevel: Yup.string().required("Selecione o nível de educação"),
	email: Yup.string()
		.email("Insira um email válido")
		.required("Email é obrigatório"),
	password: Yup.string()
		.min(8, "Senha, mínimo de 8 caracteres")
		.required("Senha é obrigatório"),
});

export const SignUp = () => {
	const navigate = useNavigate();

	const initialValues: CreateUserParams = {
		firstName: "",
		lastName: "",
		username: "",
		gender: "",
		birthDate: "",
		educationLevel: "",
		email: "",
		password: "",
	};

	const handleSubmit = async (data: CreateUserParams) => {
		const createdUser = await createUserService(data);
		if (createdUser.error) {
			errorNotify(createdUser.data);
			return;
		}
		successNotify("Usuário registrado com sucesso");
		navigate("/login");
	};

	return (
		<div className="max-w-[1180px] min-h-[calc(100vh-72px)] p-8 mb-8 m-auto flex items-center justify-center">
			<div className="min-h-[524px] h-full w-full flex bg-opacity-50">
				<div className="hidden w-full md:block rounded-lg">
					<img
						src="/login.png"
						alt="Login"
						className="h-full bg-red-300 object-cover"
					/>
				</div>
				<div className="bg-white w-full rounded p-6 md:p-12 shadow-2xl flex items-center justify-center md:min-w-[648px]">
					<Formik
						initialValues={initialValues}
						validationSchema={schema}
						onSubmit={handleSubmit}
					>
						{({ errors, touched }) => (
							<Form className="flex w-full flex-col">
								<h1 className="text-2xl text-gray-600 font-semibold mb-6 text-center">
									REGISTRAR USUÁRIO
								</h1>
								<div className="flex flex-col gap-5">
									<div className="grid w-full gap-5 md:grid-cols-2">
										<div>
											<Label label="Nome" htmlFor="name" />
											<Input
												error={errors.firstName}
												touched={touched.firstName}
												type="text"
												id="firstName"
												name="firstName"
												placeholder="Digite seu nome..."
											/>
										</div>
										<div>
											<Label label="Sobrenome" htmlFor="lastName" />
											<Input
												error={errors.lastName}
												touched={touched.lastName}
												type="text"
												id="lastName"
												name="lastName"
												placeholder="Sobrenome..."
											/>
										</div>
									</div>
									<div className="grid w-full gap-5 md:grid-cols-2">
										<div>
											<Label label="Nome de usuário" htmlFor="username" />
											<Input
												error={errors.username}
												touched={touched.username}
												type="text"
												id="username"
												name="username"
												placeholder="Digite seu nome de usuário..."
											/>
										</div>
										<div>
											<Label label="Gênero" htmlFor="gender" />
											<Select
												id="gender"
												name="gender"
												error={errors.gender}
												touched={touched.gender}
											>
												<option value="">Selecione o gênero...</option>
												<option value="MALE">Masculino</option>
												<option value="FEMALE">Feminino</option>
												<option value="OTHER">Outro</option>
											</Select>
										</div>
									</div>
									<div className="grid w-full gap-5 md:grid-cols-2">
										<div>
											<Label label="Data de nascimento" htmlFor="birthDate" />
											<Input
												error={errors.birthDate}
												touched={touched.birthDate}
												type="date"
												id="birthDate"
												name="birthDate"
												placeholder="Data de nascimento..."
											/>
										</div>
										<div>
											<Label
												label="Nível de educação"
												htmlFor="educationLevel"
											/>
											<Select
												error={errors.educationLevel}
												touched={touched.educationLevel}
												id="educationLevel"
												name="educationLevel"
											>
												<option value="">Nível de educação...</option>
												<option value="ELEMENTARY_SCHOOL">
													Ensino Fundamental
												</option>
												<option value="HIGH_SCHOOL">Ensino Médio</option>
												<option value="GRADUATION">Graduação</option>
												<option value="SPECIALIZATION">Especialização</option>
												<option value="MASTER">Mestrado</option>
												<option value="DOCTORAGE">Doutorado</option>
											</Select>
										</div>
									</div>
									<div className="grid w-full gap-5 md:grid-cols-2">
										<div>
											<Label label="E-mail" htmlFor="email" />
											<Input
												error={errors.email}
												touched={touched.email}
												type="email"
												id="email"
												name="email"
												placeholder="Digite seu e-mail..."
											/>
										</div>
										<div>
											<Label label="Senha" htmlFor="password" />
											<Input
												error={errors.password}
												touched={touched.password}
												type="password"
												id="password"
												name="password"
												placeholder="Senha..."
											/>
										</div>
									</div>
								</div>
								<div className="mt-5 gap-4 flex flex-col items-center justify-between">
									<div className="h-12 w-full">
										<Button title="CADASTRAR" type="submit" />
									</div>
									<div className="flex justify-center items-center w-full relative">
										<span className="dashed-line-left"></span>
										<span className="text-sm font-bold text-[#4b5563]">OU</span>
										<span className="dashed-line-right"></span>
									</div>
									<span className="flex text-gray-600 font-bold whitespace-nowrap gap-1 items-center justify-center">
										Já possui uma conta?
										<Link
											className="h-12 w-full text-primary font-bold flex items-center justify-center transition ease-in-out hover:underline"
											to="/login"
										>
											Faça login
										</Link>
									</span>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
};
