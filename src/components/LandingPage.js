import React, { useEffect } from 'react';
import './LandingPage.css';
import { setTitle } from '../title';
import Dashboard from "./Dashboard";

const LandingPage = () => {

  useEffect(() => {
    setTitle("GenkiPets - Home");
  }, []);

  return (
    <div className="landing-page">
      <div className="welcome-note">
        <h1>Hi, welcome to GenkiPets!</h1>
        <p>Your assistant for taking good care of your furbabies.</p>
      </div>
      <div className="landing-body">
        <div className="dashboard-section">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
