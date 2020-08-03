import React, {useState} from 'react';
//styling
import './InfoComponents.css';

//components
import ItemDisplayEdit from '../../functions/ItemDisplayEdit'
// import {renderPageItems} from '../../functions/renderPageItems'


const EmergencyContacts = () => {
  // changes text to inputs for editing
  const [edit, setEdit] = useState(false)
  const [numContact, setNumContact] = useState(1)

  // form items
  const emerencyContactItems = [
    "Name", 
    "Relationship",
    "Phone Number",
    "Address",
  ]

  // determines number of contacts based on numContact state
  const renderContactBox = () => {
    const contactArr = []
    for (let i = 0; i < numContact; i++){
        contactArr.push(
            <>
                <h3 className="info-header">Contact {i+1}</h3>
                {emerencyContactItems.map(label => <ItemDisplayEdit label={label} edit={edit}/>)}
            </>
        )
    }
    return contactArr
  }

  return (
    <div className="EmergencyContacts info-comp">

      <h1 className="info-header">Emergency Contacts</h1>
      <button className="edit-button" 
        onClick={() => setEdit(!edit)}>
        Edit
      </button>

      {renderContactBox()}

      <button onClick={() => setNumContact(numContact + 1)}>
          Add Contact
      </button>
      <button onClick={() => setNumContact(numContact - 1)}>
          Remove Contact
      </button>


    </div>
  );
}

export default EmergencyContacts;
