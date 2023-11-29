import { InputHTMLAttributes, useEffect, useRef } from "react";
import { useField } from "@unform/core";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
}

export const UserInput = ({ name, ...rest }: InputProps) => {
	const inputRef = useRef(null);
	const { fieldName, registerField, error, clearError } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef,
			getValue: (ref) => {
				return ref.current.value;
			},
			setValue: (ref, value) => {
				ref.current.value = value;
			},
			clearValue: (ref) => {
				ref.current.value = "";
			},
		});
	}, [fieldName, registerField]);

	return (
		<div className="flex flex-col">
			<input
				ref={inputRef}
				id={name}
				name={name}
				onChange={() => clearError()}
				{...rest}
				className={`w-full bg-gray-300 text-gray-600 px-4 py-2 h-14 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-border ${
					error ? "border-red-400" : ""
				}`}
			/>
			<span className="text-red-400 text-sm h-2">{error ? error : ''}</span>
		</div>
	);
};
