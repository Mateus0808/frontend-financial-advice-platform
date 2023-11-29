import { FaMoneyBillTrendUp } from 'react-icons/fa6'
import { IoSettingsOutline } from 'react-icons/io5'
import { IconContext } from 'react-icons'
import { GoSignOut } from 'react-icons/go'
import { SiGoogletagmanager } from 'react-icons/si'
import { useAuthenticated } from '../contexts/AuthContext'

import { IconsTracking } from './icons/Tracking'
import { IconReward } from './icons/Rewards'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
	const { signOut } = useAuthenticated()
	
  return (
    <div className="max-w-sm min-h-screen sticky top-0 left-0 bg-[#202024] flex flex-col md:flex">
      <div className="flex flex-col">
				<div className='w-full min-h-[6rem] p-4 flex justify-center items-center'>
					<img className='w-16 md:w-24' src="/logo.png" alt="" />
				</div>

        <div className="border-b-[1px] border-solid w-full border-gray-200" />

        <div className="px-6 inline-block mb-4 md:mt-4">
          <span className="hidden whitespace-nowrap text-gray-400 text-sm font-semibold lg:block">
            VISÃO GERAL
          </span>
          <ul className="flex flex-col mt-4">
            <li className="group whitespace-nowrap cursor-pointer px-2 rounded items-center h-12 gap-2 hover:bg-white hover:bg-opacity-10">
              <Link
                to="/home/educacao-financeira"
                className="flex gap-4 items-center justify-center lg:justify-start text-white h-full w-full"
              >
                <IconContext.Provider
                  value={{
                    className: 'group-hover:fill-primary h-6 w-6',
                  }}
                >
                  <FaMoneyBillTrendUp />
                </IconContext.Provider>

                <span className="hidden group-hover:text-primary lg:block">
                  Educação Financeira
                </span>
              </Link>
            </li>

            <li className="group whitespace-nowrap cursor-pointer px-2 rounded items-center h-12 gap-2 hover:bg-white hover:bg-opacity-10">
              <Link to="" className="flex gap-4 justify-center lg:justify-start text-white items-center h-full">
								<IconsTracking />

                <span className="hidden group-hover:text-primary lg:block">
                  Rastreamento de Metas
                </span>
              </Link>
            </li>

            <li className="group whitespace-nowrap cursor-pointer px-2 rounded items-center h-12 gap-2 hover:bg-white hover:bg-opacity-10">
              <Link to="" className="flex gap-4 justify-center lg:justify-start text-white items-center h-full">
								<IconReward />

                <span className="hidden lg:block group-hover:text-primary">Recompensas</span>
              </Link>
            </li>

            <li className="group whitespace-nowrap cursor-pointer px-2 rounded items-center h-12 gap-2 hover:bg-white hover:bg-opacity-10">
              <Link to="/home/transacoes" className="flex justify-center lg:justify-start gap-4 items-center text-white h-full">
                <IconContext.Provider
                  value={{
                    color: 'bg-gray-600',
                    className: 'group-hover:text-primary h-6 w-6',
                  }}
                >
                  <SiGoogletagmanager />
                </IconContext.Provider>

                <span className="hidden lg:block group-hover:text-primary">
                  Gerenciamento de Transações
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-b-[1px] whitespace-nowrap border-solid w-full border-gray-200" />
        <div className="px-6 md:mt-4">
          <span className="hidden text-gray-400 text-sm font-semibold lg:block">CONTA</span>
          <ul className='flex flex-col mt-4'>
						<li className="group whitespace-nowrap cursor-pointer px-2 rounded items-center h-12 gap-2 hover:bg-white hover:bg-opacity-10">
              <Link
                to="/home/configuracoes"
                className="flex items-center justify-center lg:justify-start text-white h-12 gap-2"
              >
                <IconContext.Provider
                  value={{
                    className: 'group-hover:text-primary h-6 w-6',
                  }}
                >
                  <IoSettingsOutline />
                </IconContext.Provider>
                <span className="hidden lg:block group-hover:text-primary font-semibold">
                  Configurações
                </span>
              </Link>
            </li>
            <li className="group whitespace-nowrap cursor-pointer px-2 rounded items-center h-12 gap-2 hover:bg-white hover:bg-opacity-10">
              <button
                onClick={() => signOut()}
                className="flex items-center w-full justify-center lg:justify-start h-12 gap-2"
              >
                <IconContext.Provider
                  value={{
                    className: 'fill-white group-hover:fill-primary h-6 w-6',
                  }}
                >
                  <GoSignOut />
                </IconContext.Provider>
                <span className="hidden text-white lg:block group-hover:text-primary font-semibold">
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
