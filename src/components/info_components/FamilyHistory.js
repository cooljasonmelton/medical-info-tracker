import React, {useState} from 'react';
//styling
import './InfoComponents.css';

//components
import ItemDisplayEdit from '../../functions/ItemDisplayEdit'
// import {renderPageItems} from '../../functions/renderPageItems'


const FamilyHistory = () => {
  // changes text to inputs for editing
  const [edit, setEdit] = useState(false)

  // form item labels
  const familyHistoryItems = [

  ]

  return (
    <div className="FamilyHistory info-comp">

      <h1 className="info-header">Family History</h1>
      <button className="edit-button" 
        onClick={() => setEdit(!edit)}>
        Edit
      </button>
      
      {familyHistoryItems.map(label => <ItemDisplayEdit label={label} edit={edit}/>)}


    </div>
  );
}

export default FamilyHistory;
