import React from "react";
import { IMessage } from "../../../inc/typing/IMessage";
import { parseTimestamp } from "../../../inc/common/Dates";
import { useNavigate } from "react-router-dom";
import "../../../styles/pages/widgets/messages.style.scss";

const Messages: React.FC<{ messages: IMessage[], title?: string }> = ({ messages, title = "Messages" }) => {
	const navigate = useNavigate();
	const redirectToThread = (threadId: string) => {
		navigate(`/message-thread/${threadId}`);
	};

	return (
		<>
			<h1>{title}</h1>
			<ul className="message-list">
				{messages && messages.length && messages.map((message, idx) => (
					<li key={idx} className={"message-list-item"} onClick={() => redirectToThread(message.threadId)}>
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