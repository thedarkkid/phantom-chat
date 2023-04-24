import React, { useEffect, useState } from "react";
import { Message } from "../../typing/Message";
import { User } from "../../typing/User";
import { parseTimestamp } from "../../common/Dates";
import "../../styles/pages/widgets/messagethread.style.scss";
import { scrollToBottom } from "../../common/Scroll";

const MessageThread: React.FC<{ thread: Message[], user: User, sender: User }> = ({ thread, user, sender }) => {

	const [ newMessage, setNewMessage ] = useState<string | null>(null);
	const sendMessage = () => console.log("[New Message]:", newMessage);
	useEffect(() => scrollToBottom(".message-box"), []);

	return (
		<>
			<div className="sender-tag-wrapper">
				<h3 className="sender-tag">{sender.tag}</h3>
			</div>
			<div className="message-box">
				{thread.map((message, idx) => (
					<div key={idx} className={`message-wrapper ${user.id === message.sender.id ? 'mine' : ''}`}>
						<div className="message-body">{message.body}</div>
						<div className="message-time">{parseTimestamp(message.timestamp)}</div>
					</div>
				))}
			</div>
			<div className="message-input">
				<input onSubmit={() => sendMessage()} onChange={(e) => setNewMessage(e.target.value)} placeholder="New Message"/>
				<input type="submit" value="send" onClick={() => sendMessage()}/>
			</div>
		</>
	);
}
export default MessageThread;