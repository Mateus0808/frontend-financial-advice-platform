import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Label } from "../../../../components/Label";
import { Button } from "../../../../components/Button";
import { CardContainer } from "./CardContainer";
import { UserInput } from "../../../../components/user/UserInput";
import { UserAddress } from "../../../../services/user/type/user-address.interface";

const schema = Yup.object({
	city: Yup.string()
		.min(2, "Mínimo de 2 caracteres")
		.required("Nome é obrigatório"),
	uf: Yup.string().required("Sobrenome é obrigatório"),
	street: Yup.string()
		.min(2, "Nome de usuário mínimo de 2 caracteres")
		.max(12, "Nome de usuário máximo de 12 caracteres")
		.required("Nome de usuário é obrigatório"),
	complement: Yup.string().required("Selecione o gênero"),
	neighborhood: Yup.string().required("Selecione o gênero"),
	number: Yup.number().required("Selecione o gênero"),
	postalCode: Yup.string().required("Selecione o gênero"),
	country: Yup.string().required("Selecione o gênero"),
});

export const Address = () => {
	const initialValues: UserAddress = {
		city: "São Paulo",
		uf: "SP",
		street: "Rua A",
		complement: "Casa",
		neighborhood: "Lagoa Nova",
		number: 285,
		postalCode: "69076-820",
		country: "Brasil",
	};

	const handleSubmit = () => {};

	return (
		<CardContainer id="address">
			<h1 className="text-gray-600 font-bold text-xl">Endereço</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={schema}
				onSubmit={handleSubmit}
			>
				{({ errors, touched }) => (
					<Form className="w-full pt-7 rounded flex flex-col gap-6">
						<div className="grid grid-cols-1 gap-7 md:grid-cols-2">
							<div className="">
								<Label label="Cidade" htmlFor="city" />
								<UserInput
									error={errors.city}
									touched={touched.city}
									name="city"
									type="text"
								/>
							</div>
							<div className="">
								<Label label="UF" htmlFor="uf" />
								<UserInput
									error={errors.uf}
									touched={touched.uf}
									name="uf"
									type="text"
								/>
							</div>
							<div className="">
								<Label label="Rua" htmlFor="street" />
								<UserInput
									error={errors.street}
									touched={touched.street}
									name="street"
									type="text"
								/>
							</div>

							<div className="">
								<Label label="Complemento" htmlFor="complement" />
								<UserInput
									error={errors.complement}
									touched={touched.complement}
									name="complement"
									type="text"
								/>
							</div>

							<div className="">
								<Label label="Bairro" htmlFor="neighborhood" />
								<UserInput
									error={errors.neighborhood}
									touched={touched.neighborhood}
									name="neighborhood"
									type="text"
								/>
							</div>

							<div>
								<Label label="Número" htmlFor="number" />
								<UserInput
									error={errors.number}
									touched={touched.number}
									name="number"
									type="text"
								/>
							</div>

							<div>
								<Label label="CEP" htmlFor="postalCode" />
								<UserInput
									error={errors.postalCode}
									touched={touched.postalCode}
									name="postalCode"
									type="text"
								/>
							</div>

							<div>
								<Label label="País" htmlFor="country" />
								<UserInput
									error={errors.country}
									touched={touched.country}
									name="country"
									type="text"
								/>
							</div>
						</div>

						<div className="w-[154px] h-12 flex items-center justify-start">
							<Button title="Salvar" type="submit" />
						</div>
					</Form>
				)}
			</Formik>
		</CardContainer>
	);
};
