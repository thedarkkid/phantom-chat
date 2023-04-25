import React, { useState } from "react";

const NewMessage: React.FC = () => {
	const [ newUserTag, setNewUserTag ] = useState<string | null>(null);
	const [ newUserMessage, setNewUserMessage ] = useState<string | null>(null);
	const onSendNewMessage = () => console.log(newUserTag, newUserMessage);
	return (
		<>
			<h1>NewMessage</h1>
			<div className="form-wrapper">
				<label htmlFor="message-request-tag">Enter user Tag</label>
				<input id="message-request-tag" placeholder="@usertag" onChange={(e) => setNewUserTag(e.target.value)} />
				<textarea id="message-request-tag" placeholder="message" onChange={(e) => setNewUserMessage(e.target.value)} />
				<button onClick={onSendNewMessage}>Message</button>
			</div>
		</>
	);
}
export default NewMessage;