import { IUser } from "./IUser";

export interface IMessage {
	sender: IUser;
	timestamp: number;
	threadId: string;
	body: string;
}

export interface IMessageThread {
	sender: IUser;
	recipient: IUser;
	threadId: string;
	messages: IMessage[]
}