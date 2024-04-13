import "./App.css";
import "./styles/tailwind.css";

import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CreateEditReminder from "./components/CreateEditReminder";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

function App() {
	return (
		<Router>
			<div className="Container">
				<div className="App">
					<Header />
					<Routes>
						<Route exact path="/" element={<LandingPage />} />
						<Route exact path="/dashboard" element={<Dashboard />} />
						{/* Route for creating a new reminder */}
						<Route
							exact
							path="/new-reminder"
							element={<CreateEditReminder />}
						/>

						{/* Route for editing an existing reminder */}
						<Route
							path="/edit-reminder/:guid"
							element={<CreateEditReminder />}
						/>
						{/* Add other routes here */}
					</Routes>
					<Footer />
				</div>
			</div>
		</Router>
	);
}

export default App;
