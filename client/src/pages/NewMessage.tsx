import React, { useState } from "react";

const NewMessage: React.FC = () => {
	const [ newUserTag, setNewUserTag ] = useState<string | null>(null);
	const [ newUserMessage, setNewUserMessage ] = useState<string | null>(null);
	const onSendNewMessage = (e: any) => {
		e.preventDefault();
		console.log(newUserTag, newUserMessage);
	};

	return (
		<>
			<h1>NewMessage</h1>
			<div className="form-wrapper">
				<form onSubmit={onSendNewMessage}>
					<div className="message-request-tag">
						<label htmlFor="message-request-tag">User Tag</label>
						<input id="message-request-tag" placeholder="@usertag" onChange={(e) => setNewUserTag(e.target.value)}/>
					</div>
					<textarea id="message-request-tag" placeholder="message" onChange={(e) => setNewUserMessage(e.target.value)}/>
					<button type="submit">Message</button>
				</form>

			</div>
		</>
	);
}
export default NewMessage;