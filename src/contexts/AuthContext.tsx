import { createContext, ReactNode, useContext } from "react";
import { SignInData, useAuth } from "./hooks/useAuth";
import { UserResponse } from "../services/user/type/user-response.interface";
import { UpdateEmailRequest } from "../services/requests/user/update-user.interface";

type AuthContextType = {
	isAuthenticated: boolean;
	user: UserResponse | undefined;
	signIn: (data: SignInData) => Promise<void>;
	signOut: () => Promise<void>;
	isLoggedIn: () => Promise<void>;
	getUserById: (id: string) => Promise<void>;
	updateUser: (
		userId: string,
		data: Partial<UserResponse>
	) => Promise<UserResponse | any>;
	updateUserEmail: (
		userId: string,
		email: UpdateEmailRequest
	) => Promise<UserResponse | any>;
	loading: boolean;
	setUser: React.Dispatch<React.SetStateAction<UserResponse | undefined>>;
};

type AuthProvider = {
	children: ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProvider) {
	const {
		signIn,
		setUser,
		signOut,
		isLoggedIn,
		isAuthenticated,
		loading,
		user,
		updateUser,
		updateUserEmail,
		getUserById,
	} = useAuth();

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
				isAuthenticated,
				isLoggedIn,
				loading,
				signIn,
				signOut,
				updateUser,
				updateUserEmail,
				getUserById,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuthenticated() {
	const ctx = useContext(AuthContext);

	return ctx;
}
