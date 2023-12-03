import { InputHTMLAttributes } from "react";
import { Field } from 'formik'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	touched: boolean | undefined;
	error: string | undefined
}

export const UserInput = ({ touched, error, name, ...rest }: InputProps) => {

	return (
		<div className="flex flex-col">
			<Field
				id={name}
				name={name}
				{...rest}
				className={`w-full bg-gray-300 text-gray-600 px-4 py-2 h-14 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-border`}
			/>
			<span className="text-red-400 text-sm h-2">{ (error && touched) ? error : '' }</span>
		</div>
	);
};

