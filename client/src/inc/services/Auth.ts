import { GetUserRequest } from "../stubs/auth_pb";
import { AuthServiceClient } from "../stubs/auth_pb_service";

export const getUser =  (token: string = "ran"): any => {
	let client = new AuthServiceClient('http://localhost:8080');
	let request = new GetUserRequest();
	request.setToken(token);

	console.log("tried to get user");
	return client.getUser(request, {} as any, (err, response) => {
		console.log(response, "auth res");
	})
}
