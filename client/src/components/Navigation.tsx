import React, { lazy } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Authenticate from "./Authenticate";
import { useAuth } from "../state/context/Auth";

const MessageRequests = lazy(() => import("./pages/MessageRequests"));
const NewMessage = lazy(() => import("./pages/NewMessage"));
const Home = lazy(() => import("./pages/Home"));
const MessageThread = lazy(() => import("./pages/MessageThread"));
const Navigation: React.FC = () => {
	const { user } = useAuth();

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
			{!user && <Authenticate/>}
		</div>
	)
}

export default Navigation;