import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container"> {/* Corrected class name */}
      <h1>About This Website</h1>
      <p>This Website is designed to help you manage your tasks effectively.</p>
      <button className="about-button">Learn More</button>
    </div>
  );
}

export default About;
