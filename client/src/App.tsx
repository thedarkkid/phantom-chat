import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./state/AuthProvider";
import Navigation from "./components/Navigation";

const App: React.FC = () => {
	return (
		<Router>
			<Suspense fallback={<div>Loading.....</div>}>
				<AuthProvider>
					<Navigation></Navigation>
				</AuthProvider>
			</Suspense>
		</Router>
	);
}

export default App;
