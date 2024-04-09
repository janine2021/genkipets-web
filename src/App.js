import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<div className="Container">
				<div className="App">
					<Header />
					<Routes>
						<Route exact path="/" element={<LandingPage />} />
						{/* Add other routes here */}
					</Routes>
					<Footer />
				</div>
			</div>
		</Router>
	);
}

export default App;
