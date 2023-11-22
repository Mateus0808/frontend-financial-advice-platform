import { LabelHTMLAttributes } from 'react'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label: string
}

export const Label = ({ label, ...rest }: LabelProps) => {
  return (
    <label {...rest} className="flex whitespace-nowrap mb-2 text-md font-bold text-gray-600">
      {label}
    </label>
  )
}
