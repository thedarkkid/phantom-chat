import React, { useState } from "react";
import { Message } from "../../typing/Message";
import { parseTimestamp } from "../../common/Dates";
import { getThread } from "../../services/Messages";
import MessageThread from "./MessageThread";
import Users from "../../mock/users.json";
import "../../styles/pages/widgets/messages.style.scss";

const Messages: React.FC<{ messages: Message[] }> = ({ messages }) => {
	const [ currentMessage, setCurrentMessage ] = useState<null | Message>(null);

	return (
		<>
			<h1>Messages</h1>
			<ul className="message-list">
				{!currentMessage && messages.map((message, idx) => (
					<li key={idx} className={"message-list-item"} onClick={() => setCurrentMessage(message)}>
						<div className="message-sender">{message.sender.tag}</div>
						<div className="message-body">{message.body}</div>
						<div className="message-time">{parseTimestamp(message.timestamp)}</div>
					</li>
				))}
				{currentMessage && <MessageThread
					thread={getThread(currentMessage.thread)}
					sender={currentMessage.sender}
					user={Users.me}
				/>}
			</ul>
		</>
	);
}
export default Messages;