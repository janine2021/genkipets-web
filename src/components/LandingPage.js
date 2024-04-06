import React, { useEffect } from 'react';
import './LandingPage.css';
import { setTitle } from '../title'; 

const LandingPage = () => {

  useEffect(() => {
    setTitle("GenkiPets - Landing");
  }, []); 

  return (
    <div className="landing-page">
      <div className="welcome-note">
        <h1>Hi, welcome to GenkiPets!</h1>
        <p>Your assistant for taking good care of your furbabies.</p>
      </div>
    </div>
  );
};

export default LandingPage;
