import { FaMoneyBillTrendUp } from 'react-icons/fa6'
import { IoSettingsOutline } from 'react-icons/io5'
import { IconContext } from 'react-icons'
import { GoSignOut } from 'react-icons/go'
import { TbPigMoney } from 'react-icons/tb'
import { SiGoogletagmanager } from 'react-icons/si'
import { useAuthenticated } from '../contexts/AuthContext'

export const Sidebar = () => {
  const { signOut } = useAuthenticated()
  return (
    <div className="max-w-sm min-h-screen sticky bg-[#202024] flex flex-col md:flex">
      <div className="flex flex-col gap-4">
        <h1 className="p-6">Logo</h1>

        <div className="border-b-[1px] border-solid w-full border-gray-200" />

        <div className="px-6">
          <span className="text-gray-400 text-sm font-semibold">
            VISÃO GERAL
          </span>
          <ul className="flex flex-col">
            <li className="group whitespace-nowrap cursor-pointer px-2 rounded items-center h-12 gap-2 hover:bg-white hover:bg-opacity-10">
              <a
                href="/home/educacao-financeira"
                className="flex gap-4 items-center h-full"
              >
                <IconContext.Provider
                  value={{
                    className: 'group-hover:fill-primary h-4 w-4',
                  }}
                >
                  <FaMoneyBillTrendUp />
                </IconContext.Provider>

                <span className="hidden group-hover:text-primary md:block">
                  Educação Financeira
                </span>
              </a>
            </li>

            <li className="group cursor-pointer whitespace-nowrap px-2 rounded h-12 gap-2 hover:bg-white hover:bg-opacity-10">
              <a href="" className="flex gap-4 items-center h-full">
                <IconContext.Provider
                  value={{
                    color: 'bg-gray-600',
                    className: 'group-hover:text-primary h-4 w-4',
                  }}
                >
                  <TbPigMoney />
                </IconContext.Provider>

                <span className="hidden group-hover:text-primary md:block">
                  Rastreamento de Metas
                </span>
              </a>
            </li>

            <li className="group cursor-pointer whitespace-nowrap flex px-2 rounded items-center h-12 gap-2 hover:bg-white hover:bg-opacity-10">
              <a href="" className="flex gap-4 items-center h-full">
                <IconContext.Provider
                  value={{
                    color: 'bg-gray-600',
                    className: 'group-hover:text-primary h-4 w-4',
                  }}
                >
                  <TbPigMoney />
                </IconContext.Provider>

                <span className="hidden md:block group-hover:text-primary">Recompensas</span>
              </a>
            </li>

            <li className="group cursor-pointer whitespace-nowrap flex px-2 rounded items-center h-12 gap-2 hover:bg-white hover:bg-opacity-10">
              <a href="" className="flex gap-4 items-center h-full">
                <IconContext.Provider
                  value={{
                    color: 'bg-gray-600',
                    className: 'group-hover:text-primary h-4 w-4',
                  }}
                >
                  <SiGoogletagmanager />
                </IconContext.Provider>

                <span className="hidden md:block group-hover:text-primary">
                  Gerenciamento de Transações
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="border-b-[1px] whitespace-nowrap border-solid w-full border-gray-200" />
        <div className="px-6">
          <span className="text-gray-400 text-sm font-semibold">CONTA</span>
          <ul>
            <li className="group whitespace-nowrap cursor-pointer px-2 rounded h-12  hover:bg-white hover:bg-opacity-10">
              <a
                href="/home/configuracoes"
                className="flex items-center h-12 gap-2"
              >
                <IconContext.Provider
                  value={{
                    className: 'group-hover:text-primary h-4 w-4',
                  }}
                >
                  <IoSettingsOutline />
                </IconContext.Provider>
                <span className="hidden md:block group-hover:text-primary font-semibold">
                  Configurações
                </span>
              </a>
            </li>
            <li className="group whitespace-nowrap cursor-pointer flex px-2 rounded items-center h-12 gap-2 hover:bg-white hover:bg-opacity-10">
              <button
                onClick={() => signOut()}
                className="flex items-center h-12 gap-2"
              >
                <IconContext.Provider
                  value={{
                    className: 'group-hover:fill-primary h-4 w-4',
                  }}
                >
                  <GoSignOut />
                </IconContext.Provider>
                <span className="hidden md:block group-hover:text-primary font-semibold">
                  Sair
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
