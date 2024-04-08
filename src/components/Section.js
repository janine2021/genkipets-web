import React from "react";
import { FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";

const Section = ({ title, buttonText }) => {
	return (
		<div className="dashboard-section">
			<div className="section-header">
				<div className="section-title">{title}</div>
				<button className="section-button">
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
