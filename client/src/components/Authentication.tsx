import React, { ChangeEvent, FormEvent, FormEventHandler, useCallback, useState } from "react";
import { AuthForm } from "../inc/services/Auth";
import { useAuth } from "../state/context/Auth";
import { AuthType } from "../state/context/auth.typing";

const Authentication: React.FC = () => {
	const [ form, setForm ] = useState<Partial<AuthForm>>({ tag: "", password: "" });
	const [ authAction, setAuthAction ] = useState<AuthAction>("login");
	const { state, dispatch } = useAuth();
	const { user, error } = state;

	const updateForm = (e: ChangeEvent<HTMLElement>, field: keyof AuthForm) => {
		e.preventDefault();
		const oldForm = Object.assign({}, form);
		oldForm[field] = (e.target as any).value
		setForm(oldForm);
	}
	const changeAction = (e: ChangeEvent<HTMLElement>) => {
		e.preventDefault();
		setAuthAction((e.target as any).value as AuthAction)
	}

	const onAuthUser: FormEventHandler<HTMLFormElement> = useCallback(async (e: FormEvent) => {
		e.preventDefault();
		const dispatchType: AuthType = (authAction === 'register') ? AuthType.REGISTER : AuthType.LOGIN;
		dispatch({ type: dispatchType, payload: form })

	}, [ authAction, dispatch, form ]);

	if (user) window.location.reload();
	return (
		<>
			<form action="pages/widgets#" onSubmit={onAuthUser}>
				<div className="login-or-register">
					<input type="radio" id="login" name="action" value="login" checked={"login" === authAction}
								 onChange={changeAction}/>
					<label htmlFor="login">Login</label><br/>
					<input type="radio" id="register" name="action" value="register" checked={"register" === authAction}
								 onChange={changeAction}/>
					<label htmlFor="action">Register</label><b/>
				</div>
				<div>
					<input type="text" placeholder="tag" value={form.tag}
								 onChange={(e) => updateForm(e, "tag")}/>
					<input type="password" placeholder="password" value={form.password}
								 onChange={(e) => updateForm(e, "password")}/>
					<button type="submit">GO {'->'}</button>
				</div>
				{error && <p>{error}</p>}
			</form>
		</>
	)
};

type AuthAction = "login" | "register";


export default Authentication;