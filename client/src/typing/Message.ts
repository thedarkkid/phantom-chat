import { User } from "./User";

export interface Message {
	sender: User;
	timestamp: number;
	thread: string;
	body: string;
}