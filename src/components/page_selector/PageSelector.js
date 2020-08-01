import React, { useState } from 'react';

// styles
import './PageSelector.css';

const PageSelector = () => {
  const [active, setActive] = useState('Demographic Info')

  // array of page names
  const pageNames = [
    "Demographic Info",
    "Medications / Allergies",
    "Medical History",
    "Family History",
    "Emergency Contacts"
  ];

  // sets class names, adds active if page matches state
  const setClassNames = page => {
    const classNameArr = ["selector-item"];
    if (active == page) classNameArr.push('active')
    return classNameArr.join(' ');
  };

  const handleClick = e => {
    setActive(e.target.innerText)
    // add push to route to change med info
  }

  // maps pageNames into h3s 
  const renderSelectors = () => {
    return pageNames.map(page=> {
    return (
      <h3 className={setClassNames(page)}
        onClick={handleClick}> 
        {page} 
      </h3>
      )
    });
  };

  return (
    <div className="PageSelector">
      {renderSelectors()}
    </div>
  );
}

export default PageSelector;
