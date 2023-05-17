import React, { PropsWithChildren, useReducer } from "react";
import {
	AuthContext,
	AuthDispatchContext,
	AuthReducer, AuthSideEffects,
} from "./context/Auth";
import { AuthReducerAction } from "./context/auth.typing";
import { useSideEffects } from "../inc/common/State";

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [ auth, dispatch ] = useReducer(AuthReducer, { user: false, status: "pending", error: null });
	const asyncDispatch = useSideEffects<AuthReducerAction>(AuthSideEffects, dispatch);

	return (
		<AuthContext.Provider value={auth}>
			<AuthDispatchContext.Provider value={asyncDispatch}>
				{children}
			</AuthDispatchContext.Provider>
		</AuthContext.Provider>
	)
}

export default AuthProvider