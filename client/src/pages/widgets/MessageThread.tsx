import React from "react";
import { Message } from "../../typing/Message";
import { User } from "../../typing/User";
import { parseTimestamp } from "../../common/Dates";

const MessageThread: React.FC<{ thread: Message[], user: User, sender: User }> = ({ thread, user, sender }) => {

	return (
		<>
			<div className="sender-tag-wrapper">
				<h2 className="sender-tag">{sender.tag}</h2>
			</div>
			{thread.map(message => (
				<div className={`message-wrapper ${user.id === message.sender.id ? 'mine' : ''}`}>
					<div className="message-body">{message.body}</div>
					<div className="message-time">{parseTimestamp(message.timestamp)}</div>
				</div>
			))}
		</>
	);
}
export default MessageThread;