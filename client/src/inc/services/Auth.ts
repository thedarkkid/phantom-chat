import { GetUserRequest, User } from "../stubs/auth_pb";
import { AuthServiceClient } from "../stubs/auth_pb_service";
import { IUser } from "../typing/IUser";

const SERVICE_HOST = "http://localhost:8080";
export const getUser = async (token: string = "guest"): Promise<IUser> => {
	let client = new AuthServiceClient(SERVICE_HOST);
	let request = new GetUserRequest();
	request.setToken(token);

	return new Promise((resolve, reject) => {
		client.getUser(request, {} as any, (err, res: User | null) => {
			if (res) resolve(res?.toObject() as IUser);
			if (err || !res) reject(err);
		});
	})
}
