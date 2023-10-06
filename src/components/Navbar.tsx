import { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { HiMenuAlt2 } from 'react-icons/hi'
import { useMediaQuery } from 'react-responsive'
import { useLocation } from 'react-router-dom'

type LinkProps = {
  name: string
  link: string
  pathname: string
}
const Link = (props: LinkProps) => {
  const { name, link, pathname } = props
  return (
    <li className="h-12 flex  rounded border-2 border-transparent items-center w-full hover:border-primary-border md:w-min md:h-full md:border-none md:relative md:px-4">
      <a
        className={`text-white font-semibold p-1 h-full w-full flex items-center hover:text-opacity-80 ${
          pathname === link && 'activePage'
        }`}
        href={link}
      >
        {name}
      </a>
    </li>
  )
}

export const Navbar = () => {
  const location = useLocation()
  const [menuIsActivated, setMenuIsActivated] = useState(false)
  const isDesktop = useMediaQuery({ minWidth: 768 })

  useEffect(() => {
    setMenuIsActivated(() => false)
  }, [isDesktop])

  return (
    <header className="max-[1440px] w-full h-16 p-8 relative flex justify-between items-center border-b-[1px] border-[#29292e]">
      <div className="flex items-center gap-2">
        <a className="text-white" href="/">
          Logo
        </a>
        <div className="flex w-[1px] h-8 border-r-[1px] border-solid border-[#29292e] md:hidden"></div>
        <button
          className="md:hidden"
          onClick={() => setMenuIsActivated(!menuIsActivated)}
        >
          <IconContext.Provider
            value={{ color: '#fff', className: 'h-8 w-8 hover:fill-gray-300' }}
          >
            <HiMenuAlt2 />
          </IconContext.Provider>
        </button>
      </div>

      <nav
        className={`${
          menuIsActivated && 'hidden'
        } absolute w-full top-16 left-0 md:static md:w-min md:h-16`}
      >
        <ul className="flex flex-col w-full h-full p-8 gap-2 md:gap-0 md:flex-row md:p-0 md:items-center md:justify-center">
          <Link name="Home" link="/" pathname={location.pathname} />
          <Link
            name="Consultas"
            link="/consultas"
            pathname={location.pathname}
          />
          <Link name="Ações" link="/acoes" pathname={location.pathname} />
        </ul>
      </nav>

      <ul className="flex gap-2">
        <a
          className="flex h-10 text-sm text-white hover:transition hover:ease-in-out font-bold items-center rounded px-4 border border-primary hover:bg-primary-hover"
          href=""
        >
          LOGIN
        </a>
        <a
          className="flex h-10 text-sm text-white hover:transition hover:ease-in-out font-bold items-center rounded px-4 border border-primary hover:bg-primary-hover"
          href=""
        >
          CRIAR CONTA
        </a>
      </ul>
    </header>
  )
}
