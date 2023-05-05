import React, { useEffect, useState } from "react";
import { IMessageThread as iMessageThread } from "../inc/typing/IMessage";
import { parseTimestamp } from "../inc/common/Dates";
import "../styles/pages/widgets/messagethread.style.scss";
import { scrollToBottom } from "../inc/common/Scroll";
import { useParams } from "react-router-dom";
import { getMessageThread } from "../inc/services/Messages";
import { getUser } from "../inc/services/Auth";

const MessageThread: React.FC = () => {
	// const params = useParams<{ threadId: string }>();
	// const thread: iMessageThread = getMessageThread(params.threadId as string);
	// const user = getUser();
	//
	// const [ newMessage, setNewMessage ] = useState<string | null>(null);
	// const sendMessage = () => console.log("[New Message]:", newMessage);

	useEffect(() => scrollToBottom(".message-box"), []);
	return (
		<>
			{/*<div className="sender-tag-wrapper">*/}
			{/*	<h3 className="sender-tag">{thread.sender.tag}</h3>*/}
			{/*</div>*/}
			{/*<div className="message-box">*/}
			{/*	{thread.messages.map((message, idx) => (*/}
			{/*		<div key={idx} className={`message-wrapper ${user.id === message.sender.id ? 'mine' : ''}`}>*/}
			{/*			<div className="message-body">{message.body}</div>*/}
			{/*			<div className="message-time">{parseTimestamp(message.timestamp)}</div>*/}
			{/*		</div>*/}
			{/*	))}*/}
			{/*</div>*/}
			{/*<div className="message-input">*/}
			{/*	<input onSubmit={() => sendMessage()} onChange={(e) => setNewMessage(e.target.value)}*/}
			{/*				 placeholder="New Message"/>*/}
			{/*	<input type="submit" value="send" onClick={() => sendMessage()}/>*/}
			{/*</div>*/}
		</>
	);
}
export default MessageThread;