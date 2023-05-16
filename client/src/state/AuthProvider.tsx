import React, { PropsWithChildren, useCallback, useReducer } from "react";
import {
	actionFunctions,
	AuthContext,
	AuthStatusType,
	AuthType,
	AuthDispatchContext,
	UserReducer,
	UserReducerAction
} from "./context/Auth";
import { setToken } from "../inc/services/Auth";

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [ auth, dispatch ] = useReducer(UserReducer, { user: false, status: "pending", error: null });

	const asyncEnabledDispatch = useCallback(async (action: UserReducerAction) => {
		const dispatchAction: UserReducerAction = {} as UserReducerAction;
		dispatch(action);
		switch (action.type) {
			case AuthType.LOGIN:
			case AuthType.REGISTER:
			case AuthType.RELOAD: {
				try {
					dispatchAction.payload = await actionFunctions[action.type](action.payload as any); // Bad Idea(smart code, unreadable)
					setToken(dispatchAction?.payload?.token ?? "-");
					dispatchAction.type = `${action.type}_success` as AuthStatusType;
				} catch (e: any) {
					dispatchAction.error = decodeURI(e?.metadata?.headersMap['grpc-message'][0] ?? 'unknown error occurred');
					dispatchAction.type = `${action.type}_error` as AuthStatusType;
					if (action.type === AuthType.RELOAD as string) setToken("-");
				}
				break;
			}
		}
		dispatch(dispatchAction);
	}, [])


	return (
		<AuthContext.Provider value={auth}>
			<AuthDispatchContext.Provider value={asyncEnabledDispatch}>
				{children}
			</AuthDispatchContext.Provider>
		</AuthContext.Provider>
	)
}

export default AuthProvider