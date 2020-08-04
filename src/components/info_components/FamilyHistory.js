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


/*

family Medical History
Please indicate if YOUR FAMILY has a history of the following: (ONLY include parents, grandparents, siblings, and children)
■ I am adopted and do not know biological family history
■ Family History Unknown
■ Alcohol Abuse
■ Anemia
■ Anesthetic Complication
■ Arthritis
■ Asthma
■ Bladder Problems
■ Bleeding Disease
■ Breast Cancer
■ Colon Cancer
■ Depression
■ Diabetes
■ Heart Disease
■ High Blood Pressure
■ High Cholesterol
■ Kidney Disease
■ Leukemia
■ Lung/Respiratory Disease
■ Migraines
■ Osteoporosis
■ Other Cancer
■ Rectal Cancer
■ Seizures/Convulsions
■ Severe Allergy
■ Stroke/CVA of the Brain
■ Thyroid Problems
■ NONE of the Above
■ Mother, Grandmother, or Sister developed
 heart disease before the age of 65
■ Father, Grandfather, or Brother developed
 heart disease before the age of 55

*/