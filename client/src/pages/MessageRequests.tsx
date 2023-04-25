import React from "react";
import { getUserMessageRequests } from "../inc/services/Messages";
import { User } from "../inc/typing/User";
import { getUser } from "../inc/services/Auth";
import Messages from "./widgets/Messages";

const MessageRequests: React.FC = () => {
	const authUser: User = getUser();
	const incomingMessageRequest = getUserMessageRequests(authUser.id);
	return (
		<div className="my-message-requests">
			{incomingMessageRequest && incomingMessageRequest.length > 0 &&
				<Messages messages={incomingMessageRequest} title="Message Requests"/>
			}
		</div>
	);
}
export default MessageRequests;