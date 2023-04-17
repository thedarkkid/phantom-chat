import React, { lazy, Suspense } from 'react';
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/About"));
const App: React.FC = () => {
	return (
		<Router>
			<Suspense fallback={<div>Loading.....</div>}>
				<nav>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
					</ul>
				</nav>
				<Routes>
					<Route path="/about" element={<About/>}></Route>
					<Route path="/" element={<Home/>}></Route>
				</Routes>
			</Suspense>
		</Router>
	);
}

export default App;
