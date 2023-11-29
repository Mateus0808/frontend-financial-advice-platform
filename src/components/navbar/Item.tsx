import { Link } from 'react-router-dom'

type LinkProps = {
	name: string;
	link: string;
	pathname: string;
};

export const Item = (props: LinkProps) => {
	const { name, link, pathname } = props;
	return (
		<li className="h-12 whitespace-nowrap flex rounded border-2 border-transparent items-center w-full hover:border-primary-border md:w-min md:h-full md:border-none md:relative md:px-4">
			<Link 
				className={`text-gray-500 font-semibold p-1 h-full w-full flex items-center hover:text-opacity-80 ${
					pathname === link && "activePage"
				}`}
				to={link}
			>
				{name}
			</Link>
		</li>
	);
};