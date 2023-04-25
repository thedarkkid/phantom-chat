import MessageThreads from "../../mock/message-thread.json";
import MessageRequests from "../../mock/message-requests.json";
import Users from "../../mock/users.json";
import MessagesList from "../../mock/messages-list.json";
import { Message, MessageThread } from "../typing/Message";

export const getMessageThread = (threadId: string): MessageThread => {
	return {
		threadId,
		messages: MessageThreads.messages,
		recipient: Users.me,
		sender: Users.users[0],
	};
}

export const getUserMessagesList = (userId: number): Message[] => {
	return MessagesList.messages;
}

export const getUserMessageRequests = (userId: number): Message[] => {
	return MessageRequests.messages;
}