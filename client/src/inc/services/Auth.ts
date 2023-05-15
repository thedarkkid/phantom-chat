import { GetUserRequest, User, UserRequest } from "../stubs/auth_pb";
import { AuthServiceClient } from "../stubs/auth_pb_service";
import { IAuthUser, IUser } from "../typing/IUser";

const SERVICE_HOST = "http://localhost:8080";
const TOKEN_KEY = '--phantom-auth-token';

export const getUser = async (token: string = "guest"): Promise<IUser> => {
	let request = new GetUserRequest();
	request.setToken(token);

	return new Promise((resolve, reject) => {
		serviceClient.getUser(request, {} as any, (err, res: User | null) => {
			if (res) resolve(res?.toObject() as IUser);
			if (err || !res) reject(err);
		});
	})
}

export const loginUser = (auth: AuthForm): Promise<IAuthUser> => {
	let request = new UserRequest();
	request.setPass(auth.password);
	request.setUsertag(auth.tag)

	return new Promise((resolve, reject) => {
		serviceClient.authenticateUser(request, {} as any, (err, res: User | null) => {
			if (res) resolve(res?.toObject() as IAuthUser);
			if (err || !res) reject(err);
		});
	})
}

export const registerUser = (_auth: AuthForm): Promise<IAuthUser> => {
	let request = new UserRequest();
	request.setPass(_auth.password);
	request.setUsertag(_auth.tag)

	return new Promise((resolve, reject) => {
		serviceClient.createUser(request, {} as any, (err, res: User | null) => {
			if (res) resolve(res?.toObject() as IAuthUser);
			if (err || !res) reject(err);
		});
	})
}
export const getToken = () => localStorage.getItem(TOKEN_KEY) ?? "-";
export const setToken = (token: string) => localStorage.setItem(TOKEN_KEY, token);


export interface AuthForm {
	tag: string;
	password: string;
}

export interface AuthenticatorFN<P, R> {
	(form: P): Promise<R>;
}

const serviceClient = new AuthServiceClient(SERVICE_HOST);
