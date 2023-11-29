import { useEffect } from "react";
import { Sidebar } from "../../components/Sidebar";
import { useAuthenticated } from "../../contexts/AuthContext";

export const UserHome = () => {
	const { isLoggedIn } = useAuthenticated();

	useEffect(() => {
		isLoggedIn();
	}, []);

	return (
		<div className="flex min-h-screen">
			<Sidebar />

			<div className="max-w-[1180px] w-full mx-auto px-4 lg:px-8 py-10">
				<div className="w-full flex flex-col p-8 gap-4">
					<h1 className="text-black text-2xl font-semibold">Dashboard</h1>
				</div>
			</div>
		</div>
	);
};
