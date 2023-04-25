import { User } from "./User";

export interface Message {
	sender: User;
	timestamp: number;
	threadId: string;
	body: string;
}

export interface MessageThread {
	sender: User;
	recipient: User;
	threadId: string;
	messages: Message[]
}