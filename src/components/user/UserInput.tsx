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


	const handleError = () => {
		clearError()
	}
	return (
		<div className="flex flex-col">
			<input
				ref={inputRef}
				id={name}
				name={name}
				onChange={() => handleError()}
				{...rest}
				className="w-full text-white text-md h-14 rounded px-4 bg-[#121214] focus:outline-none focus:ring-2 focus:ring-primary-border"
			/>
			<span className="text-red-400 text-sm h-2">{error ? error : ''}</span>
		</div>
	);
};
