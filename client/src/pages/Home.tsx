import React from "react";
import Messages from "./widgets/Messages";
import { getUserMessagesList } from "../inc/services/Messages";
import { getUser } from "../inc/services/Auth";

const Home: React.FC = () => {
	const authUser = getUser();
	const userMessages = getUserMessagesList(authUser.id);
	console.log(authUser, "user");
	return (
		<>
			<section className="messages">
				<Messages messages={userMessages}/>
			</section>
		</>

	);
}
export default Home;