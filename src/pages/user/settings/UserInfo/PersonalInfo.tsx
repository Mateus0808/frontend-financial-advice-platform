import { Form } from "@unform/web";
import { Button } from "../../../../components/Button";
import { Label } from "../../../../components/Label";
import { SelectProfile } from "../../../../components/user/SelectProfile";
import { useRef } from "react";
import { UserInput } from "../../../../components/user/UserInput";
import * as Yup from "yup";

type PersonalInfoProps = {
	name: string;
	surname: string;
	username: string;
	gender: string;
};

export const PersonalInfo = () => {
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
			await signIn(data);
		} catch (err) {
			if (err instanceof Yup.ValidationError) {
				console.log(err);
				const errorMessages = {};

				err.inner.forEach((error) => {
					errorMessages[error.path] = error.message;
				});

				formRef.current.setErrors(errorMessages);
			}
		}
	};

	return (
		<div className="flex p-8 flex-col rounded bg-[#202024]">
			<h1 className=" text-white font-bold text-xl">Informações Pessoal</h1>
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
						className="w-full text-white text-md h-14 rounded px-4 bg-[#121214] focus:outline-none focus:ring-2 focus:ring-primary-border"
						defaultValue={"Mateus"}
					/>
				</div>
				<div className="">
					<Label label="Sobrenome" htmlFor="surname" />
					<UserInput
						type="text"
						name="surname"
						id="surname"
						defaultValue={"dos Santos Loiola"}
					/>
				</div>

				<div>
					<Label label="Nome de usuário" htmlFor="username" />
					<UserInput
						type="text"
						name="username"
						id="username"
						defaultValue={"mateus08"}
					/>
				</div>
				<div>
					<Label label="Gênero" htmlFor="gender" />
					<SelectProfile id="gender" name="gender">
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
		</div>
	);
};
