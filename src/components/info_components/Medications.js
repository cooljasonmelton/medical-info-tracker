import React, {useState} from 'react';
//styling
import './InfoComponents.css';

//components
import ItemDisplayEdit from '../../functions/ItemDisplayEdit'
// import {renderPageItems} from '../../functions/renderPageItems'


const Medications = () => {
  // changes text to inputs for editing
  const [edit, setEdit] = useState(false)

  // form item labels
  const medicationsItems = [

  ]

  return (
    <div className="Medications info-comp">

      <h1 className="info-header">Medications and Allergies</h1>
      <button className="edit-button" 
        onClick={() => setEdit(!edit)}>
        Edit
      </button>
      
      {medicationsItems.map(label => <ItemDisplayEdit label={label} edit={edit}/>)}


    </div>
  );
}

export default Medications;

/*

List your prescribed drugs and over-the-counter drugs, such as vitamins and inhalers
Drug _________________________ Dose/Frequency_________ Drug_________________________ Dose/Frequency ____________
Drug _________________________ Dose/Frequency_________ Drug_________________________ Dose/Frequency ____________
Drug _________________________ Dose/Frequency_________ Drug_________________________ Dose/Frequency ____________
Drug _________________________ Dose/Frequency_________ Drug_________________________ Dose/Frequency ____________
■ List additional drugs on back of questionnaire
■ I take no medications, vitamins, herbals, or any other over-the-counter preparations


Allergies
Name________________________________________ Reaction You Had _________________________________________________
■ I have no known drug allergies

*/