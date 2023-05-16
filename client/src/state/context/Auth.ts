import { createContext, Dispatch, Reducer, useContext } from "react";
import { IAuthUser } from "../../inc/typing/IUser";
import { GenericObject } from "../../inc/typing";
import { loginUser, registerUser, reloadUser } from "../../inc/services/Auth";

export enum AuthType {
	LOGIN = 'login',
	REGISTER = 'register',
	LOGOUT = 'logout',
	RELOAD = 'reload'
}

export enum AuthStatusType {
	LOGIN_ERROR = "login_error",
	REGISTER_ERROR = "register_error",
	RELOAD_ERROR = "reload_error",

	LOGIN_SUCCESS = "login_success",
	REGISTER_SUCCESS = "register_success",
	RELOAD_SUCCESS = "reload_success"
}

export enum AuthStateStatus {
	PENDING = 'pending',
	SUCCESS = 'success',
	ERROR = 'error',
	LOADING = 'loading',
}

export interface AuthState {
	user: IAuthUser;
	status: AuthStateStatus;
	error: string;
}

export interface UserReducerAction {
	type: AuthType | AuthStatusType;
	payload: GenericObject | string
	error: string;
}


export const AuthContext = createContext<AuthState>({} as AuthState);
export const AuthDispatchContext = createContext<Dispatch<any>>(null as any);
export const useAuth = () => useContext(AuthContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);

export const UserReducer: Reducer<any, any> = (state: AuthState, action: UserReducerAction) => {
	switch (action.type) {
		case AuthType.LOGIN:
		case AuthType.REGISTER:
		case AuthType.RELOAD:
			return { ...state, status: AuthStateStatus.LOADING };

		case AuthStatusType.REGISTER_SUCCESS:
		case AuthStatusType.LOGIN_SUCCESS:
		case AuthStatusType.RELOAD_SUCCESS:
			return { ...state, status: AuthStateStatus.SUCCESS, user: action.payload, error: "" };

		case AuthStatusType.REGISTER_ERROR:
		case  AuthStatusType.LOGIN_ERROR:
		case AuthStatusType.RELOAD_ERROR:
			return { ...state, status: AuthStateStatus.ERROR, error: action.error };
	}
}

export const actionFunctions = {
	login: loginUser,
	register: registerUser,
	reload: reloadUser,
	logout: () => {
	}
}
