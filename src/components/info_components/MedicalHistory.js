import React, {useState} from 'react';
//styling
import './InfoComponents.css';

//components
import ItemDisplayEdit from '../../functions/ItemDisplayEdit'
// import {renderPageItems} from '../../functions/renderPageItems'


const MedicalHistory = () => {
  // changes text to inputs for editing
  const [edit, setEdit] = useState(false)

  // form items
  const demographicItems = [

  ]

  return (
    <div className="MedicalHistory info-comp">

      <h1 className="info-header">Medical History</h1>
      <button className="edit-button" 
        onClick={() => setEdit(!edit)}>
        Edit
      </button>
      <input type="checkbox" />

      


    </div>
  );
}

export default MedicalHistory;
