import { createContext, ReactNode, useContext } from "react";
import { SignInData, useAuth } from "./hooks/useAuth";
import { UserResponse } from "../services/user/type/user-response.interface";

type AuthContextType = {
	isAuthenticated: boolean;
	user: UserResponse | undefined;
	signIn: (data: SignInData) => Promise<void>;
	signOut: () => Promise<void>;
	isLoggedIn: () => Promise<void>;
	getUserById: () => Promise<void>;
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
