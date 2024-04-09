import React from "react";
import "./Dashboard.css";
import Section from "./Section";

const Dashboard = () => {
	return (
		<div className="dashboard">
			<Section title="Your reminders" buttonText="New reminder" />
			<Section title="Genki and Shiro's IDs" buttonText="New ID" />
		</div>
	);
};

export default Dashboard;
