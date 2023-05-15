import React, { ChangeEvent, FormEvent, FormEventHandler, useCallback, useState } from "react";
import { AuthenticatorFN, AuthForm, loginUser, registerUser, setToken } from "../../inc/services/Auth";
import { IAuthUser } from "../../inc/typing/IUser";

const Authenticate: React.FC = () => {

	const [ form, setForm ] = useState<Partial<AuthForm>>({ tag: "", password: "" });
	const [ error, setError ] = useState<String>("");
	const [ authAction, setAuthAction ] = useState<AuthAction>("login")
	const updateForm = (e: ChangeEvent<HTMLElement>, field: keyof AuthForm) => {
		e.preventDefault();
		const oldForm = Object.assign({}, form);
		oldForm[field] = (e.target as any).value
		setForm(oldForm);
	}
	const changeAction = (e: ChangeEvent<HTMLElement>) => {
		e.preventDefault();
		setError("");
		setAuthAction((e.target as any).value as AuthAction)
	}
	const onAuthUser: FormEventHandler<HTMLFormElement> = useCallback(async (e: FormEvent) => {
		setError("");
		e.preventDefault();
		const actionFn: AuthenticatorFN<AuthForm, IAuthUser> = (authAction === 'register') ? registerUser : loginUser;

		try {
			const user = await actionFn(form as AuthForm);
			setToken(user.token);
			window.location.reload();
		}catch (e: any){
			setError(decodeURI(e.metadata.headersMap['grpc-message'][0]));
		}
	}, [ authAction, form ]);

	return (
		<>
			<form action="#" onSubmit={onAuthUser}>
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


export default Authenticate;