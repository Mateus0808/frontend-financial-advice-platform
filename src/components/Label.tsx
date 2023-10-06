import { LabelHTMLAttributes } from 'react'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label: string
}

export const Label = ({ label, ...rest }: LabelProps) => {
  return (
    <label {...rest} className="flex mb-2 text-sm font-bold text-gray-600">
      {label}
    </label>
  )
}
