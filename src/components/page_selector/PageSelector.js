import React from 'react';
import './PageSelector.css';

const PageSelector = () => {
  return (
    <div className="PageSelector">
      <div className="selector-item">Demographic Info</div>
      <div className="selector-item">Medical History</div>
      <div className="selector-item">Medications/Allergies</div>
      <div className="selector-item">Family Health History</div>
      <div className="selector-item">Emergency Contacts</div>
    </div>
  );
}

export default PageSelector;
