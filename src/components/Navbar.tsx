import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { HiMenuAlt2 } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

type LinkProps = {
	name: string;
	link: string;
	pathname: string;
};
const Link = (props: LinkProps) => {
	const { name, link, pathname } = props;
	return (
		<li className="h-12 whitespace-nowrap flex rounded border-2 border-transparent items-center w-full hover:border-primary-border md:w-min md:h-full md:border-none md:relative md:px-4">
			<a
				className={`text-gray-500 font-semibold p-1 h-full w-full flex items-center hover:text-opacity-80 ${
					pathname === link && "activePage"
				}`}
				href={link}
			>
				{name}
			</a>
		</li>
	);
};

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
					<div className="flex w-[1px] h-8 border-r-[1px] border-solid border-gray-500 md:hidden"></div>
					<button className="md:hidden" onClick={() => handleMenu()}>
						<IconContext.Provider
							value={{
								color: "#000",
								className: "h-8 w-8 hover:fill-gray-300",
							}}
						>
							<HiMenuAlt2 />
						</IconContext.Provider>
					</button>
				</div>

				<nav
					className={`${
						menuIsActivated && "hidden"
					} h-screen w-full absolute top-16 left-0 md:flex md:items-center md:justify-center md:static md:w-1/2 md:h-16 transition-all ease-out duration-500`}
				>
					<ul className="ease-out duration-300 flex flex-col w-full h-full p-8 gap-2 md:gap-0 md:flex-row md:p-0 md:items-center md:justify-center">
						<Link name="Home" link="/" pathname={location.pathname} />
						<Link name="Sobre" link="/about" pathname={location.pathname} />
						<Link
							name="Contatos"
							link="/contate-nos"
							pathname={location.pathname}
						/>
					</ul>
				</nav>

				<ul className="flex w-1/2 items-center justify-end gap-2 w-full md:w-1/5">
					<a
						className="flex h-10 text-sm bg-primary transition ease-in-out text-white hover:transition hover:ease-in-out font-bold items-center rounded px-4 border border-primary hover:bg-primary-hover"
						href="/login"
					>
						LOGIN
					</a>
					<a
						className="flex h-10 whitespace-nowrap text-sm transition ease-in-out font-bold items-center rounded px-4 border border-primary hover:bg-primary-hover"
						href="/signup"
					>
						CRIAR CONTA
					</a>
				</ul>
			</div>
		</header>
	);
};
