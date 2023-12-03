import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useAuthenticated } from "../../contexts/AuthContext";

const schema = Yup.object({
	email: Yup.string()
		.email("Enter a valid email")
		.required("Email is required"),
	password: Yup.string()
		.min(6, "Password minimum 8 characters")
		.required("Password is required"),
});

interface LoginProps {
	email: string;
	password: string;
}

export const Login = () => {
	const { signIn } = useAuthenticated();

	const initialValues: LoginProps = { email: "", password: "" };

	const handleSubmit = async (data: LoginProps) => {
		await signIn(data)
	};

	return (
		<div className="max-w-[1180px] p-5 m-auto flex items-center justify-center min-h-[calc(100vh-72px)]">
			<div className="h-[524px] flex bg-opacity-50">
				<div className="hidden w-full md:block rounded-lg shadow-md">
					<img
						src="/login.png"
						alt="Login"
						className="h-full bg-red-300 object-cover"
					/>
				</div>
				<div className="min-w-[28rem] bg-white rounded md:rounded-none p-6 shadow-2xl flex items-center justify-center">
					<Formik
						initialValues={initialValues}
						validationSchema={schema}
						onSubmit={handleSubmit}
					>
						{({ errors, touched }) => (
							<Form className="w-full">
								<h2 className="text-2xl text-gray-700 font-semibold mb-6 text-center">
									FAÇA LOGIN
								</h2>
								<div className="mb-4">
									<Label label="Email" htmlFor="login" />
									<Input
										type="email"
										id="email"
										name="email"
										error={errors.email}
										touched={touched.email}
										placeholder="test@example.com"
									/>
								</div>
								<div className="mb-6">
									<Label label="Senha" htmlFor="password" />
									<Input
										error={errors.password}
										touched={touched.password}
										type="password"
										id="password"
										name="password"
										placeholder="********"
									/>
								</div>

								<div className="flex-col items-center justify-between">
									<div className="h-12">
										<Button title="ENTRAR" type="submit" />
									</div>
									<div className="flex justify-between mt-2">
										<Link
											to="#"
											className="text-sm font-bold text-primary hover:text-primary-hover rounded-md focus:outline-none focus:ring-2 focus:ring-primary-hover"
										>
											Esqueceu a senha?
										</Link>
										<Link
											to="/register"
											className="text-sm font-bold text-primary hover:text-primary-hover rounded-md focus:outline-none focus:ring-2 focus:ring-primary-hover"
										>
											Registre-se
										</Link>
									</div>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
};
