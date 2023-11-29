import { SelectHTMLAttributes, useEffect, useRef } from 'react'
import { useField } from '@unform/core'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
}

export const Select = ({ name, children, ...rest }: SelectProps) => {
  const selectRef = useRef(null)
  const { fieldName, registerField, error, clearError } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef,
      getValue: (ref) => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: (ref) => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
		<div className='flex flex-col'>
			<select
				ref={selectRef}
				id={name}
				name={name}
				onChange={() => clearError()}
				{...rest}
				className={`w-full bg-gray-200 text-gray-600 px-4 h-14 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-border ${error ? 'border-red-400' : ''}`}
			>
				{children}
			</select>
			<span className='text-red-400 h-2 text-sm'>{error ? error : ''}</span>
		</div>
  )
}
