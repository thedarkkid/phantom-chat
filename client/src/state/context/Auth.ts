import { createContext, Dispatch, Reducer, useContext } from "react";
import { loginUser, registerUser, reloadUser, setToken } from "../../inc/services/Auth";
import { AuthState, AuthStateStatus, AuthStatusType, AuthType, AuthReducerAction } from "./auth.typing";
import { SideEffect } from "../../inc/typing";

export const AuthContext = createContext<AuthState>({} as AuthState);
export const AuthDispatchContext = createContext<Dispatch<AuthReducerAction>>(null as any);

export const useAuth = (): { state: AuthState, dispatch: Dispatch<AuthReducerAction> } => ({
	state: useContext(AuthContext),
	dispatch: useContext(AuthDispatchContext)
});

export const useAuthState = () => useContext(AuthContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);

export const AuthReducer: Reducer<any, any> = (state: AuthState, action: AuthReducerAction) => {
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
			return { ...state, status: AuthStateStatus.ERROR, error: action.error };

		case AuthStatusType.RELOAD_ERROR:
			return { ...state, status: AuthStateStatus.ERROR };
	}
}

export const AuthSideEffects: SideEffect<AuthReducerAction> = async (action, dispatch) => {
	dispatch(action);

	switch (action.type) {
		case AuthType.LOGIN:
		case AuthType.REGISTER:
		case AuthType.RELOAD: {
			const sideEffectAction: AuthReducerAction = {} as AuthReducerAction;
			try {
				sideEffectAction.payload = await actionFunctions[action.type](action.payload as any); // Bad Idea(smart code, unreadable)
				setToken(sideEffectAction?.payload?.token ?? "-");
				sideEffectAction.type = `${action.type}_success` as AuthStatusType;
			} catch (e: any) {
				sideEffectAction.error = decodeURI(e?.metadata?.headersMap['grpc-message'][0] ?? 'unknown error occurred');
				sideEffectAction.type = `${action.type}_error` as AuthStatusType;
				if (action.type === AuthType.RELOAD as string) setToken("-");
			}

			dispatch(sideEffectAction);
			break;
		}
	}
}
export const actionFunctions = {
	login: loginUser,
	register: registerUser,
	reload: reloadUser,
	logout: () => {
	}
}

/**
 * TYPINGS
 */

