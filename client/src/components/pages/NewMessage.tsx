import React, { useState } from "react";
import { createNewMessageRequest } from "../../inc/services/Messages";
import { useAuthState } from "../../state/context/Auth";

const NewMessage: React.FC = () => {
	const { user } = useAuthState();
	const [ recipientTag, setRecipientTag ] = useState<string>("");
	const [ message, setMessage ] = useState<string>("");
	const onSendNewMessage = (e: any) => {
		e.preventDefault();
		createNewMessageRequest({ senderId: user.id as string, recipientTag, message })
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return (
		<>
			<h1>NewMessage</h1>
			<div className="form-wrapper">
				<form onSubmit={onSendNewMessage}>
					<div className="message-request-tag">
						<label htmlFor="message-request-tag">User Tag</label>
						<input id="message-request-tag" placeholder="@usertag" onChange={(e) => setRecipientTag(e.target.value)}/>
					</div>
					<textarea id="message-request-tag" placeholder="message" onChange={(e) => setMessage(e.target.value)}/>
					<button type="submit">Message</button>
				</form>

			</div>
		</>
	);
}
export default NewMessage;