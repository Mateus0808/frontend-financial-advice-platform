import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { GoSignOut } from "react-icons/go";
import { SiGoogletagmanager } from "react-icons/si";
import { useAuthenticated } from "../../contexts/AuthContext";

import { IconsTracking } from "../icons/Tracking";
import { IconReward } from "../icons/Rewards";
import { Outlet } from "react-router-dom";
import { LinkOption } from "./LinkOption";

export const Sidebar = () => {
	const { signOut } = useAuthenticated()

	return (
		<div className="flex">
			<div className="max-w-sm min-h-screen sticky top-0 left-0 bg-[#202024] flex flex-col md:flex">
				<div className="flex flex-col">
					<div className="w-full min-h-[6rem] p-4 flex justify-center items-center">
						<img className="w-16 md:w-24" src="/logo.png" alt="" />
					</div>

					<div className="border-b-[1px] border-solid w-full border-gray-200" />

					<div className="px-6 inline-block mb-4 md:mt-4">
						<span className="hidden whitespace-nowrap text-gray-400 text-sm font-semibold lg:block">
							VISÃO GERAL
						</span>
						<ul className="flex flex-col mt-4">
							<LinkOption
								icon={<FaMoneyBillTrendUp />}
								path="/home/educacao-financeira"
								title="Educação Financeira"
							/>

							<LinkOption
								icon={<IconsTracking />}
								path="/home/educacao-financeira"
								title="Rastreamento de Metas"
							/>

							<LinkOption
								icon={<IconReward />}
								path="/home/educacao-financeira"
								title="Recompensas"
							/>

							<LinkOption
								icon={<SiGoogletagmanager />}
								path="/home/transacoes"
								title="Gerenciamento de Transações"
							/>
						</ul>
					</div>
					<div className="border-b-[1px] whitespace-nowrap border-solid w-full border-gray-200" />
					<div className="px-6 md:mt-4">
						<span className="hidden text-gray-400 text-sm font-semibold lg:block">
							CONTA
						</span>
						<ul className="flex flex-col mt-4">
							<LinkOption
								icon={<IoSettingsOutline />}
								path="/home/configuracoes"
								title="Configurações"
							/>

							<LinkOption signOut={signOut} icon={<GoSignOut />} path="" title="Sair" />
						</ul>
					</div>
				</div>
			</div>
			<div
				id="dash"
				className="max-w-[1180px] w-full mx-auto px-4 lg:px-8 py-10"
			>
				<Outlet />
			</div>
		</div>
	);
};
