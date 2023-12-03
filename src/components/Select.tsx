import { SelectHTMLAttributes } from 'react'
import { Field } from 'formik'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
	touched: boolean | undefined;
	error: string | undefined
}

export const Select = ({ error, touched, name, children, ...rest }: SelectProps) => {
  return (
		<div className='flex flex-col'>
			<Field
				id={name}
				as="select"
				name={name}
				{...rest}
				className={`w-full bg-gray-200 text-gray-600 px-4 h-14 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-border ${error ? 'border-red-400' : ''}`}
			>
				{children}
			</Field>
			<span className="text-red-400 text-sm h-2">{ (error && touched) ? error : '' }</span>
		</div>
  )
}
