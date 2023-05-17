import React, { useEffect, useState } from "react";
import Messages from "./widgets/Messages";
import { getUserMessagesList } from "../../inc/services/Messages";
import { getToken, getUser } from "../../inc/services/Auth";
import { IUser } from "../../inc/typing/IUser";
import Authentication from "../Authentication";
import { useAuth } from "../../state/context/Auth";

const Home: React.FC = () => {
	// const [ user, setUser ] = useState<IUser>({} as any);
	// const [ hasAuth, setHasAuth ] = useState<Boolean>(false);
	//
	// useEffect(() => {
	// 	const loadUser = async () => {
	// 		try {
	// 			const authToken = getToken();
	// 			setUser(await getUser(authToken));
	// 			setHasAuth(true);
	// 		} catch (e) {}
	// 	}
	// 	loadUser();
	// }, []);
	//
	// console.log(user, "auth-user");
	// const userMessages = getUserMessagesList(authUser.id ?? 1);
	return (
		<>
			<section className="messages">
				{/*<Messages messages={userMessages}/>*/}
			</section>
			{/*{!hasAuth && <Authentication/>}*/}
		</>
	);
}
export default Home;