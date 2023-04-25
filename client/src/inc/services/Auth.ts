import Users from "../../mock/users.json";
import { User } from "../typing/User";

export const getUser = (): User => {
	return Users.me;
}