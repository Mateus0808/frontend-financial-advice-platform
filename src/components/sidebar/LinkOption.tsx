import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

type LinkOptionProps = {
	title: string;
	icon: any;
	path: string
	signOut?: () => void;
};

export const LinkOption = ({ signOut, icon, title, path }: LinkOptionProps) => (
	<li className="group whitespace-nowrap cursor-pointer px-2 rounded items-center h-12 gap-2 hover:bg-white hover:bg-opacity-10">
		<Link
			to={path}
			onClick={signOut}
			className="flex justify-center lg:justify-start gap-4 items-center text-white h-full"
		>
			<IconContext.Provider
				value={{
					color: "bg-gray-600",
					className: "group-hover:text-primary h-6 w-6",
				}}
			>
				{icon}
			</IconContext.Provider>

			<span className="hidden lg:block group-hover:text-primary">{title}</span>
		</Link>
	</li>
);
