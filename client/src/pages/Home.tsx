import React, { useEffect, useState } from "react";
import Messages from "./widgets/Messages";
import { getUserMessagesList } from "../inc/services/Messages";
import { getUser } from "../inc/services/Auth";
import { IUser } from "../inc/typing/IUser";

const Home: React.FC = () => {
	const [ user, setUser ] = useState<IUser>({} as any);
	useEffect(() => {
		const loadUser = async () => {
			// setUser(await getUser())
		}
		loadUser();
	}, []);

	console.log(user, "auth-user");
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