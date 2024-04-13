import React from "react";

import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Section = ({ title, buttonText }) => {
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate("/new-reminder");
	};

	return (
		<div className="dashboard-section">
			<div className="section-header">
				<div className="section-title">{title}</div>
				<button className="section-button" onClick={handleButtonClick}>
					<FaPlus className="create-icon" />
					<span>{buttonText}</span>
				</button>
			</div>
			<div className="section-content">
				{/* Your section body content goes here */}
			</div>
		</div>
	);
};

Section.propTypes = {
	title: PropTypes.string.isRequired,
	buttonText: PropTypes.string.isRequired,
};

export default Section;
