import { PersonalInfo } from "./PersonalInfo";
import { Address } from "./Address";
// import { MenuOptions } from "./MenuOptions";
import { MyAccess } from "./myAccess";
import { DefaultContainer } from "../../DefaultContainer";

export const UserInfo = () => {
	
	return (
		<div className="max-w-[1180px] relative flex w-full items-start justify-between">
			{/* <MenuOptions /> */}
			<DefaultContainer>
				<PersonalInfo />
				<MyAccess />
				<Address />
			</DefaultContainer>
		</div>
	);
};
