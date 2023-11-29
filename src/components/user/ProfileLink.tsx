import { IconContext } from 'react-icons'
import { BsChevronRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

type ProfileLinkProps = {
  path: string
  title: string
  description: string
}

export const LinkSetting = ({ path, title, description }: ProfileLinkProps) => {
  return (
    <Link
      to={path}
      className="p-8 rounded flex-col justify-center border border-gray-100 shadow-sm transition-colors ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-border"
    >
      <div className="flex justify-between gap-8 items-center">
        <div className="flex flex-col gap-4">
          <p className="text-primary text-lg">{title}</p>
          <span className="text-gray-600">{description}</span>
        </div>
        <IconContext.Provider
          value={{
            className: 'fill-gray-600 h-6 w-6',
          }}
        >
          <BsChevronRight />
        </IconContext.Provider>
      </div>
    </Link>
  )
}
