import React, {useState} from 'react';
//styling
import './InfoComponents.css';

//components
import ItemDisplayEdit from '../../functions/ItemDisplayEdit'
// import {renderPageItems} from '../../functions/renderPageItems'


const Demographics = () => {
  // changes text to inputs for editing
  const [edit, setEdit] = useState(false)

  // form items
  const demographicItems = [
    "Preferred Name (Last, First, M.I.):",
    "Legal Name (Last, First, M.I.):",
    "Date of Birth:",
    "Preferred Pronouns:",
    "Sex Assigned at Birth:",
    "Marital Status",
    "Occupation:",
    "Previous or Referring Doctor",
    "Date of last physical exam:"
  ]

  return (
    <div className="Demographics info-comp">

      <h1 className="info-header">Demographics</h1>
      <button className="edit-button" 
        onClick={() => setEdit(!edit)}>
        Edit
      </button>
      
      {demographicItems.map(label => <ItemDisplayEdit label={label} edit={edit}/>)}


    </div>
  );
}

export default Demographics;
