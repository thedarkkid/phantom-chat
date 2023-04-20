import React from "react";
import { Message } from "../../typing/Message";
import { parseTimestamp } from "../../common/Dates";

const Messages: React.FC<{ messages: Message[] }> = ({ messages }) => {

	return (
		<>
			<h2>Messages</h2>
			<ul className="message-list">
				{messages.map(message => (
					<li key={message.timestamp} className={"message-list-item"}>
						<div className="message-sender">{message.sender.tag}</div>
						<div className="message-body">{message.body}</div>
						<div className="message-time">{parseTimestamp(message.timestamp)}</div>
					</li>
				))}
			</ul>
		</>
	);
}
export default Messages;