import React, { useState } from 'react';

// styles
import './PageSelector.css';

const PageSelector = () => {
  const [active, setActive] = useState('')

  console.log(active)

  const pageNames = [
    "Demographic Info",
    "Medications / Allergies",
    "Medical History",
    "Family History",
    "Emergency Contacts"
  ];

  const setClassNames = page => {
    const classNameArr = ["selector-item"];
    if (active == page) classNameArr.push('active')
    return classNameArr.join(' ');
  };

  const renderSelectors = () => {
    return pageNames.map(page=> {
    return (
      <h3 className={setClassNames(page)}
        onClick={e => setActive(e.target.innerText)}> 
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
