import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { HiMenuAlt2 } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
import { useLocation, Link, Outlet } from "react-router-dom";
import { Item } from "./Item";

export const Navbar = () => {
	const location = useLocation();
	const [menuIsActivated, setMenuIsActivated] = useState(false);
	const isDesktop = useMediaQuery({ minWidth: 768 });

	useEffect(() => {
		handleMenu();
	}, [isDesktop]);

	const handleMenu = () => {
		setMenuIsActivated(!menuIsActivated);
	};

	return (
		<header className="sticky z-50 bg-white w-full top-0">
			<div className="md:max-w-[1440px] m-auto flex justify-between items-center h-[72px] p-8">
				<div className="flex items-center gap-2 md:w-1/5">
					<img className="h-8" src="/logo.png" alt="Logo" />
					<div className="flex w-[1px] h-8 border-r-[1px] border-solid bg-red-300 border-gray-500 md:hidden"></div>
					<button className="md:hidden" onClick={handleMenu}>
						<IconContext.Provider
							value={{
								color: "#121214",
								className: "h-8 w-8 hover:fill-gray-500 transition ease-in-out",
							}}
						>
							<HiMenuAlt2 />
						</IconContext.Provider>
					</button>
				</div>

				<nav
					className={`${
						menuIsActivated && "hidden"
					} h-screen w-full absolute bg-white top-16 left-0 md:flex md:items-center md:justify-center md:static md:w-1/2 md:h-16 transition-all ease-out duration-500`}
				>
					<ul className="ease-out duration-300 flex flex-col w-full h-full p-8 gap-2 md:gap-0 md:flex-row md:p-0 md:items-center md:justify-center">
						<Item name="Home" link="/" pathname={location.pathname} />
						<Item name="Sobre" link="/about" pathname={location.pathname} />
						<Item
							name="Contatos"
							link="/contate-nos"
							pathname={location.pathname}
						/>
					</ul>
				</nav>

				<div className="flex w-1/2 items-center justify-end gap-2 md:w-1/5">
					<Link
						to="/login"
						className="flex h-10 text-sm bg-primary transition ease-in-out text-white hover:transition hover:ease-in-out font-bold items-center rounded px-4 border border-primary hover:bg-primary-hover"
					>
						LOGIN
					</Link>
					<Link
						to="/register"
						className="flex h-10 whitespace-nowrap text-sm transition ease-in-out font-bold items-center rounded px-4 border border-primary hover:text-white hover:bg-primary-hover"
					>
						CRIAR CONTA
					</Link>
				</div>
			</div>

			<Outlet />
		</header>
	);
};
