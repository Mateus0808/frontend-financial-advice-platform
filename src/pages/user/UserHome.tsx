import { useEffect } from "react";
import { DefaultContainer } from "./DefaultContainer";
import { useAuthenticated } from "../../contexts/AuthContext";

export const UserHome = () => {
	const { isLoggedIn } = useAuthenticated();
	useEffect(() => {
		isLoggedIn();
	}, []);

	return (
		<DefaultContainer>
			<h1 className="text-black text-3xl font-semibold">Dashboard</h1>
		</DefaultContainer>
	);
};
