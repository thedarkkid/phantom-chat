import React from "react";
import Messages from "./widgets/Messages";
import { getUserMessagesList } from "../inc/services/Messages";
import { getUser } from "../inc/services/Auth";

const Home: React.FC = () => {
	const authUser: Promise<any> = getUser();
	console.log(authUser, "auth-user");
	// const userMessages = getUserMessagesList(authUser.id ?? 1);
	return (
		<>
			<section className="messages">
				{/*<Messages messages={userMessages}/>*/}
			</section>
		</>

	);
}
export default Home;