import MessageThreads from "../../mock/message-thread.json";
import MessageRequests from "../../mock/message-requests.json";
import Users from "../../mock/users.json";
import MessagesList from "../../mock/messages-list.json";
import { IMessage, IMessageThread } from "../typing/IMessage";

export const getMessageThread = (threadId: string): IMessageThread => {
	return {
		threadId,
		messages: MessageThreads.messages,
		recipient: Users.me,
		sender: Users.users[0],
	};
}

export const getUserMessagesList = (userId: number): IMessage[] => {
	return MessagesList.messages;
}

export const getUserMessageRequests = (userId: number): IMessage[] => {
	return MessageRequests.messages;
}