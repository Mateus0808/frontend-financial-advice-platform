import { IconContext } from 'react-icons'
import { BsChevronRight } from 'react-icons/bs'

type ProfileLinkProps = {
  path: string
  title: string
  description: string
}

export const ProfileLink = ({ path, title, description }: ProfileLinkProps) => {
  return (
    <a
      href={path}
      className="p-8 rounded flex-col justify-center hover:bg-gray-800 hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primary-border"
    >
      <div className="flex justify-between gap-8 items-center">
        <div className="flex flex-col gap-4">
          <p className="text-primary text-lg">{title}</p>
          <span className="text-black">{description}</span>
        </div>
        <IconContext.Provider
          value={{
            className: 'fill-black h-6 w-6',
          }}
        >
          <BsChevronRight />
        </IconContext.Provider>
      </div>
    </a>
  )
}
