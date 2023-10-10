import { FaMoneyBillTrendUp } from 'react-icons/fa6'
import { GrUserSettings } from 'react-icons/gr'
import { IoIosArrowForward } from 'react-icons/io'
import { GoSignOut } from 'react-icons/go'
import { TbPigMoney } from 'react-icons/tb'
import { IconContext } from 'react-icons'

export const Sidebar = () => {
  return (
    <div className="max-w-sm h-screen fixed bg-white flex flex-col ">
      <div className="flex flex-col gap-4">
        <h1 className="p-6">Logo</h1>

        <div className="border-b-[1px] border-solid w-full border-gray-200" />

        <div className="px-6">
          <span className="text-gray-400 text-sm font-semibold">VISÃO GERAL</span>
          <ul className="flex flex-col">
            <li className="group cursor-pointer flex px-2 rounded items-center h-12 gap-2 hover:bg-blue-100">
              <IconContext.Provider
                value={{
                  className: 'group-hover:fill-primary h-4 w-4',
                }}
              >
                <IoIosArrowForward />
              </IconContext.Provider>
              <IconContext.Provider
                value={{
                  className: 'group-hover:fill-primary h-4 w-4',
                }}
              >
                <FaMoneyBillTrendUp />
              </IconContext.Provider>

              <span className="group-hover:text-primary">
                Conceitos Financeiros
              </span>
            </li>
            <ul className="">
              <li className="group cursor-pointer flex px-8 rounded items-center h-12 gap-2 hover:bg-blue-100">
                <IconContext.Provider
                  value={{
                    color: 'bg-gray-600',
                    className: 'h-4 w-4 group-hover:fill-primary',
                  }}
                >
                  <FaMoneyBillTrendUp />
                </IconContext.Provider>

                <span className="group-hover:text-primary">
                  Orçamento Financeiro
                </span>
              </li>
              <li className="group cursor-pointer flex px-8 rounded items-center h-12 gap-2 hover:bg-blue-100">
                <IconContext.Provider
                  value={{
                    color: 'bg-gray-600',
                    className: 'group-hover:text-primary h-4 w-4',
                  }}
                >
                  <TbPigMoney />
                </IconContext.Provider>

                <span className="group-hover:text-primary">
                  Poupança e Investimento
                </span>
              </li>
            </ul>
            <li className="group cursor-pointer flex px-2 rounded items-center h-12 gap-2 hover:bg-blue-100">
              <IconContext.Provider
                value={{
                  color: 'bg-gray-600',
                  className: 'group-hover:text-primary h-4 w-4',
                }}
              >
                <IoIosArrowForward />
              </IconContext.Provider>
              <IconContext.Provider
                value={{
                  color: 'bg-gray-600',
                  className: 'group-hover:text-primary h-4 w-4',
                }}
              >
                <TbPigMoney />
              </IconContext.Provider>

              <span className="group-hover:text-primary">
                Orçamento e Gestão de Despesas
              </span>
            </li>
          </ul>
        </div>
        <div className="border-b-[1px] border-solid w-full border-gray-200" />
        <div className="px-6">
          <span className="text-gray-400 text-sm font-semibold">CONTA</span>
          <ul>
            <li className="group cursor-pointer flex px-2 rounded items-center h-12 gap-2 hover:bg-blue-100">
              <IconContext.Provider
                value={{
                  color: 'bg-gray-600',
                  className: 'group-hover:text-primary h-4 w-4',
                }}
              >
                <GrUserSettings />
              </IconContext.Provider>
              <span className="group-hover:text-primary text-gray-800 font-semibold">
                Configurações
              </span>
            </li>
            <li className="group cursor-pointer flex px-2 rounded items-center h-12 gap-2 hover:bg-blue-100">
              <IconContext.Provider
                value={{
                  color: 'bg-gray-600',
                  className: 'group-hover:text-primary h-4 w-4',
                }}
              >
                <GoSignOut />
              </IconContext.Provider>
              <span className="group-hover:text-primary text-gray-800 font-semibold">
                Sign Out
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
