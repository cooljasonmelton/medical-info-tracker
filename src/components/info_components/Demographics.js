import React from 'react';
import './InfoComponents.css';

const Demographics = () => {
  return (
    <div className="Demographics info-comp">
      <h1 className="info-header">Demographics</h1>
      <p> Preferred Name (Last, First, M.I.): </p>
      <p> Legal Name (Last, First, M.I.): </p>
      <p> Date of Birth: </p>
      <p> Preferred Pronouns: </p>
      <p> Sex Assigned at Birth: </p>
      <p> Marital Status </p>  {/* ■ Single ■ Partnered ■ Married ■ Separated ■ Divorced ■ Widowed */}
      <p> Occupation: </p>
      <p> Previous or Referring Doctor</p>
      <p> Date of last physical exam: </p>
    </div>
  );
}

export default Demographics;
