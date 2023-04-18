import React, { lazy, Suspense } from 'react';
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));
const App: React.FC = () => {
	return (
		<Router>
			<Suspense fallback={<div>Loading.....</div>}>
				<div className="chat-body">
					<nav className="nav-wrapper">
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about">About</Link></li>
						</ul>
					</nav>
					<Routes>
						<Route path="/" element={<Home/>}></Route>
						<Route path="/about" element={<About/>}></Route>
					</Routes>
				</div>
			</Suspense>
		</Router>

	);
}

export default App;
