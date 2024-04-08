import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Routes>
					<Route exact path="/" element={<LandingPage />} />
					{/* Add other routes here */}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
