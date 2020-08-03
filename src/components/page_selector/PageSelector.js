import React, { useState } from 'react';

// router
import { withRouter } from 'react-router-dom'

// styles
import './PageSelector.css';

const PageSelector = props => {
  const [active, setActive] = useState('Demographics')

  // array of page names
  const pageNames = [
    "Demographics",
    "Medical History",
    "Medications and Allergies",
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
    let route = e.target.innerText.toLowerCase().replace(/ /g,"-");
    props.history.push(`./${route}`)
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

export default withRouter(PageSelector);
