import { FaMoneyBillTrendUp } from 'react-icons/fa6'
import { IoSettingsOutline } from 'react-icons/io5'
import { IconContext } from 'react-icons'
import { GoSignOut } from 'react-icons/go'
import { TbPigMoney } from 'react-icons/tb'
import { SiGoogletagmanager } from 'react-icons/si'
import { useAuthenticated } from '../contexts/AuthContext'

import tracking from '../assets/tracking.svg'
import { IconsTracking } from './icons/Tracking'
import { IconReward } from './icons/Rewards'

export const Sidebar = () => {
  const { signOut } = useAuthenticated()
  return (
    <div className="max-w-sm min-h-screen sticky top-0 left-0 bg-[#202024] flex flex-col md:flex">
      <div className="flex flex-col">
				<div className='w-full min-h-[6rem] flex justify-center items-center'>
					<img className='w-16 md:w-24' src="/logo.png" alt="" />
				</div>

        <div className="border-b-[1px] border-solid w-full border-gray-200" />

        <div className="px-6 inline-block mb-4 md:mt-4">
          <span className="hidden text-gray-400 text-sm font-semibold md:block">
            VISÃO GERAL
          </span>
          <ul className="flex flex-col mt-4">
            <li className="group whitespace-nowrap cursor-pointer px-2 rounded items-center h-12 gap-2 hover:bg-white hover:bg-opacity-10">
              <a
                href="/home/educacao-financeira"
                className="flex gap-4 items-center text-white h-full w-full"
              >
                <IconContext.Provider
                  value={{
                    className: 'group-hover:fill-primary h-6 w-6',
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
              <a href="" className="flex gap-4 text-white items-center h-full">
								<IconsTracking />

                <span className="hidden group-hover:text-primary md:block">
                  Rastreamento de Metas
                </span>
              </a>
            </li>

            <li className="group cursor-pointer whitespace-nowrap flex px-2 rounded items-center h-12 gap-2 hover:bg-white hover:bg-opacity-10">
              <a href="" className="flex gap-4 text-white items-center h-full">
								<IconReward />

                <span className="hidden md:block group-hover:text-primary">Recompensas</span>
              </a>
            </li>

            <li className="group cursor-pointer whitespace-nowrap flex px-2 rounded items-center h-12 gap-2 hover:bg-white hover:bg-opacity-10">
              <a href="/home/transacoes" className="flex gap-4 items-center text-white h-full">
                <IconContext.Provider
                  value={{
                    color: 'bg-gray-600',
                    className: 'group-hover:text-primary h-6 w-6',
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
        <div className="px-6 md:mt-4">
          <span className="hidden text-gray-400 text-sm font-semibold md:block">CONTA</span>
          <ul className='flex flex-col mt-4'>
            <li className="group whitespace-nowrap cursor-pointer px-2 rounded h-12  hover:bg-white hover:bg-opacity-10">
              <a
                href="/home/configuracoes"
                className="flex items-center text-white h-12 gap-2"
              >
                <IconContext.Provider
                  value={{
                    className: 'group-hover:text-primary h-6 w-6',
                  }}
                >
                  <IoSettingsOutline />
                </IconContext.Provider>
                <span className="hidden md:block group-hover:text-primary font-semibold">
                  Configurações
                </span>
              </a>
            </li>
            <li className="group whitespace-nowrap text-white cursor-pointer flex px-2 rounded items-center h-12 gap-2 hover:bg-white hover:bg-opacity-10">
              <button
                onClick={() => signOut()}
                className="flex items-center h-12 gap-2"
              >
                <IconContext.Provider
                  value={{
                    className: 'group-hover:fill-primary h-6 w-6',
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
