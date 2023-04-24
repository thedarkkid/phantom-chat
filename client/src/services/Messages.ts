import MessageThreads from "../mock/message-thread.json";
import { Message } from "../typing/Message";

export const getThread = (threadId: string): Message[] => {
	return MessageThreads.messages;
}