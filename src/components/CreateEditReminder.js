// CreateEditReminder.js

import "./CreateEditReminder.css";

import React from "react";

import { PropTypes } from "prop-types";

const CreateEditReminder = ({ guid }) => {
	const title = guid ? "Edit Reminder" : "Create a new reminder for your pet";

	return (
		<div className="reminder-container">
			<h1 className="reminder-title">{title}</h1>
			{/* Render the ReminderForm component */}
		</div>
	);
};

CreateEditReminder.propTypes = {
	guid: PropTypes.string.isRequired,
};

export default CreateEditReminder;
