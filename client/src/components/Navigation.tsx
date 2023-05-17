import React, { lazy, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Authentication from "./Authentication";
import { useAuth } from "../state/context/Auth";
import { AuthStateStatus, AuthType } from "../state/context/auth.typing";

const MessageRequests = lazy(() => import("./pages/MessageRequests"));
const NewMessage = lazy(() => import("./pages/NewMessage"));
const Home = lazy(() => import("./pages/Home"));
const MessageThread = lazy(() => import("./pages/MessageThread"));
const Navigation: React.FC = () => {
	const { dispatch, state } = useAuth();
	const { user, status } = state;

	// Uses stored token to try to authorize user.
	useEffect(() => {
		if (!user && status === AuthStateStatus.PENDING) {
			dispatch({ type: AuthType.RELOAD, payload: "" });
		}
	}, [])


	return (
		<div className="chat-body">
			{user && <>
				<nav className="nav-wrapper">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/new-message">New Messages</Link></li>
						<li><Link to="/message-requests">My Message Requests</Link></li>
					</ul>
				</nav>
				<Routes>
					<Route path="/" element={<Home/>}></Route>
					<Route path="/new-message" element={<NewMessage/>}></Route>
					<Route path="/message-requests" element={<MessageRequests/>}></Route>
					<Route path="/message-thread/:threadId" element={<MessageThread/>}></Route>
				</Routes>
			</>}
			{!user && <Authentication/>}
		</div>
	)
}

export default Navigation;