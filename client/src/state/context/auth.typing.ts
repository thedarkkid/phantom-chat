import { IAuthUser } from "../../inc/typing/IUser";
import { GenericObject } from "../../inc/typing";
import { Dispatch } from "react";

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

export interface AuthReducerAction {
	type: AuthType | AuthStatusType;
	payload?: GenericObject | string
	error?: string;
}

