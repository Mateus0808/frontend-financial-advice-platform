import { InputHTMLAttributes, useEffect, useRef } from "react";
import { useField } from "@unform/core";
import InputMask from 'react-input-mask'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	mask: string
}

export const Input = ({ mask, name, ...rest }: InputProps) => {
	const inputRef = useRef(null);
	const { fieldName, defaultValue, registerField, error, clearError } =
		useField(name);

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
			<InputMask
				mask={mask}
				ref={inputRef}
				defaultValue={defaultValue}
				id={name}
				name={name}
				onChange={() => clearError()}
				{...rest}
				className={`w-full bg-gray-300 text-gray-600 p-2 h-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-border ${
					error ? "border-red-400" : ""
				}`}
			/>
			<span className="text-red-400 text-sm h-2">{error ? error : ""}</span>
		</div>
	);
};
