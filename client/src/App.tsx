import React, { lazy, Suspense } from 'react';
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

const MessageRequests = lazy(() => import("./pages/MessageRequests"));
const NewMessage = lazy(() => import("./pages/NewMessage"));
const Home = lazy(() => import("./pages/Home"));
const App: React.FC = () => {
	return (
		<Router>
			<Suspense fallback={<div>Loading.....</div>}>
				<div className="chat-body">
					<nav className="nav-wrapper">
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/new-message">New Messages</Link></li>
							<li><Link to="/message-requests">Message Requests</Link></li>
						</ul>
					</nav>
					<Routes>
						<Route path="/" element={<Home/>}></Route>
						<Route path="/new-message" element={<NewMessage/>}></Route>
						<Route path="/message-requests" element={<MessageRequests/>}></Route>
					</Routes>
				</div>
			</Suspense>
		</Router>

	);
}

export default App;
