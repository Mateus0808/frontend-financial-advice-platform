import { PersonalInfo } from "./PersonalInfo";
import { Address } from "./Address";
import { Sidebar } from "../../../components/Sidebar";
import { useAuthenticated } from "../../../contexts/AuthContext";
import { MenuOptions } from "./MenuOptions";
import { MyAccess } from "./myAccess";

export const UserInfo = () => {
	const { getUserById, user } = useAuthenticated();

	// useEffect(() => {
	// 	getUserById();
	// }, []);

	return (
		<div className="flex">
			<Sidebar />
			<div className="max-w-[1180px] relative px-12 p-5 flex w-full items-start justify-between">
				<MenuOptions />
				<div className="flex flex-col gap-8 flex-1 mt-9">
					<PersonalInfo user={user} />
					<MyAccess />
					<Address />
				</div>
			</div>
		</div>
	);
};
