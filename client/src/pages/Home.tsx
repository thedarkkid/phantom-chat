import React from "react";
import MessagesList from '../mock/messages-list.json';
import Messages from "./widgets/Messages";

const Home: React.FC = () => {
	return (
		<>
			<section className="actions">
				<button>New Message</button>
				<button> Message Requests</button>
			</section>
			<section className="messages">
				<Messages messages={MessagesList.messages} />
			</section>
		</>

	);
}
export default Home;