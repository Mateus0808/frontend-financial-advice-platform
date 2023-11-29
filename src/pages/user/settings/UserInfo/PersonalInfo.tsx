import { Form } from "@unform/web";
import { Button } from "../../../../components/Button";
import { Label } from "../../../../components/Label";
import { SelectProfile } from "../../../../components/user/SelectProfile";
import { useRef } from "react";
import { UserInput } from "../../../../components/user/UserInput";
import * as Yup from "yup";
import { UserResponse } from "../../../../services/user/type/user-response.interface";
import { CardContainer } from "./CardContainer";

type PersonalInfoProps = {
	user: UserResponse | undefined;
};

export const PersonalInfo = ({ user }: PersonalInfoProps) => {
	const formRef = useRef(null);

	const handleSubmit = async (data: PersonalInfoProps) => {
		try {
			const schema = Yup.object({
				name: Yup.string()
					.min(2, "Name minimum 2 characters")
					.required("Name is required"),
				surname: Yup.string().required("O sobrenome é obrigatório"),
				username: Yup.string()
					.min(2, "Nome de usuário mínimo de 2 caracteres")
					.max(12, "Nome de usuário máximo de 12 caracteres")
					.required("O nome de usuário é obrigatório"),
				gender: Yup.string().required("Selecione o gênero"),
			});

			await schema.validate(data, {
				abortEarly: false,
			});
			console.log("formRef", data);
		} catch (err) {
			if (err instanceof Yup.ValidationError) {
				console.log(err);
				const errorMessages = {};

				err.inner.forEach((error) => {
					if(error) 
					errorMessages[error?.path] = error.message;
				});

				formRef.current.setErrors(errorMessages);
			}
		}
	};

	return (
		<CardContainer id="personalInfo">
			<h1 className="text-gray-600 font-bold text-xl">Informações Pessoal</h1>
			<Form
				ref={formRef}
				className="w-full pt-7 rounded grid grid-cols-1 gap-7 lg:grid-cols-2"
				onSubmit={handleSubmit}
			>
				<div className="">
					<Label label="Nome" htmlFor="name" />
					<UserInput
						name="name"
						type="text"
						id="name"
						defaultValue={user?.firstName}
					/>
				</div>
				<div className="">
					<Label label="Sobrenome" htmlFor="surname" />
					<UserInput
						type="text"
						name="surname"
						id="surname"
						defaultValue={user?.lastName}
					/>
				</div>

				<div>
					<Label label="Nome de usuário" htmlFor="username" />
					<UserInput
						type="text"
						name="username"
						id="username"
						defaultValue={user?.username}
					/>
				</div>
				<div>
					<Label label="Gênero" htmlFor="gender" />
					<SelectProfile id="gender" name="gender" value={user?.gender}>
						<option value="">Selecione o gênero...</option>
						<option value="MALE">Masculino</option>
						<option value="FEMALE">Feminino</option>
						<option value="OTHER">Outro</option>
					</SelectProfile>
				</div>

				<div className="w-[154px] h-12 flex items-center justify-start">
					<Button title="Salvar" type="submit" />
				</div>
			</Form>
		</CardContainer>
	);
};
