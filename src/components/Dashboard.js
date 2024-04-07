// Dashboard.js

import React from 'react';
import './Dashboard.css';
import { FaPlus } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-section">
        <div className="section-header">
          <div className="section-title">Your furbaby reminder</div>
          <button className="section-button">
            <FaPlus className="create-icon" />
            <span>New reminder</span>
          </button>
        </div>
        <div className="section-content">
          {/* Your section body content goes here */}
        </div>
      </div>

      <div className="dashboard-section">
        <div className="section-header">
          <div className="section-title">Genki and Shiro's IDs</div>
          <button className="section-button">
            <FaPlus className="create-icon" />
            <span>New ID</span>
          </button>
        </div>
        <div className="section-content">
          {/* Your section body content goes here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
