import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className="w-full text-base h-full py-2 px-4 bg-primary text-white font-medium rounded-md hover:bg-opacity-95 focus:outline-none focus:ring-2 focus:ring-primary-border"
    >
      {title}
    </button>
  )
}
