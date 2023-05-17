import MessageThreads from "../../mock/message-thread.json";
import MessageRequests from "../../mock/message-requests.json";
import Users from "../../mock/users.json";
import MessagesList from "../../mock/messages-list.json";
import { IMessage, IMessageThread, INewMessageRequest } from "../typing/IMessage";
import { NewMessageRequest } from "../stubs/messages_pb";
import { SERVICE_HOST } from "../common/Config";
import { MessageServiceClient } from "../stubs/messages_pb_service";

const serviceClient = new MessageServiceClient(SERVICE_HOST);

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

export const createNewMessageRequest = (messageRequest: INewMessageRequest) => {
	let request =  new NewMessageRequest();
	request.setMessage(messageRequest.message);
	request.setSenderid(messageRequest.senderId);
	request.setRecipienttag(messageRequest.recipientTag)

	return new Promise((resolve, reject) => {
		serviceClient.createNewMessageRequest(request, {} as any, (err, res) => {
			if (res) resolve(res?.toObject());
			if (err || !res) reject(err);
		});
	})
}