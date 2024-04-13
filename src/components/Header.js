// Header.js

import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png"; // Import logo image
import { FaSearch, FaBell, FaUser } from "react-icons/fa"; // Import icons

const Header = () => {
	return (
		<header className="header">
			<div className="logo-container">
				<Link to="/" className="logo-link pointer">
					<img src={logo} alt="GenkiPets Logo" className="logo" />
					<h1 className="logo-text">GenkiPets</h1>
				</Link>
			</div>
			<div className="icons-container">
				<button className="icon-button">
					<FaSearch />
				</button>
				<button className="icon-button">
					<FaBell />
				</button>
				<button className="icon-button">
					<FaUser />
				</button>
			</div>
		</header>
	);
};

export default Header;
