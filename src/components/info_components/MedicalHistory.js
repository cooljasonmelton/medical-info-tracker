import React, {useState} from 'react';
//styling
import './InfoComponents.css';

//components
import ItemDisplayEdit from '../../functions/ItemDisplayEdit'
import CheckBoxDisplayEdit from '../../functions/CheckboxDisplayEdit'
// import {renderPageItems} from '../../functions/renderPageItems'


const MedicalHistory = () => {
  // changes text to inputs for editing
  const [edit, setEdit] = useState(false)

  // input items
  const medicalInputItems = [

  ]

  // checkbox items
  const medicalCheckBoxItems = [
    "Alcohol Abuse",
    "Anemia",
    "Anesthetic Complication",
    "Anxiety Disorder",
    "Arthritis",
    "Asthma",
    "Autoimmune Problems",
    "Birth Defects",
    "Bladder Problems",
    "Bleeding Disease",
    "Blood Clots",
    "Blood Transfusion(s)",
    "Bowel Disease",
    "Breast Cancer",
    "Cervical Cancer",
    "Colon Cancer",
    "Depression",
    "Diabetes",
    "Growth/Development Disorder",
    "Hearing Impairment",
    "Heart Attack",
    "Heart Disease",
    "Heart Pain/Angina",
    "Hepatitis A",
    "Hepatitis B",
    "Hepatitis C",
    "High Blood Pressure",
    "High Cholesterol",
    "HIV", 
    "Hives", 
    "Kidney Disease", 
    "Liver Cancer",
    "Liver Disease",
    "Lung Cancer",
    "Lung/Respiratory Disease",
    "Mental Illness",
    "Migraines", 
    "Osteoporosis",
    "Prostate Cancer",
    "Rectal Cancer",
    "Reflux/GERD",
    "Seizures/Convulsions",
    "Severe Allergy",
    "Sexually Transmitted Disease",
    "Skin Cancer",
    "Stroke/CVA of the Brain",
    "Suicide Attempt",
    "Thyroid Problems",
    "Ulcer",
    "Visual Impairment",
    "Other Disease, Cancer, or Significant Medical Illness"
  ]


  const renderMedicalCheckboxes = () => {
    return medicalCheckBoxItems.map(item => {
      return <CheckBoxDisplayEdit edit={edit} label={item}/>
    })

  }

  return (
    <div className="MedicalHistory info-comp">

      <h1 className="info-header">Medical History</h1>
      <button className="edit-button" 
        onClick={() => setEdit(!edit)}>
        Edit
      </button>  

      {renderMedicalCheckboxes()}



    </div>
  );
}

export default MedicalHistory;

/*
PERSONAL HEALTH HISTORY
Childhood Illness: ■ Measles ■ Mumps ■ Rubella ■ Chickenpox ■ Rheumatic Fever ■ Polio ■ None
Immunizations and Dates: ■ Tetanus__________ ■ Pneumonia__________ ■ Hepatitis A__________ ■ Hepatitis B__________
■ Chickenpox__________ ■ Influenza_________ ■ MMR Measles, Mumps, Rubella_________ ■ Meningococcal_________ ■ None
Tests/Screenings and Dates: ■ Eye Exam_________ ■ Colonoscopy_________ ■ Dexa Scan_________
Surgeries
Year________________ Reason______________________________________________ Hospital______________________________
Year________________ Reason______________________________________________ Hospital______________________________
Year________________ Reason______________________________________________ Hospital______________________________
Year________________ Reason______________________________________________ Hospital______

Other hospitalizations
Year________________ Reason______________________________________________ Hospital_________________________________
Year________________ Reason______________________________________________ Hospital_________________________________
Year________________ Reason______________________________________________ Hospital_________________________________
Year________________ Reason______________________________________________ Hospital_________________________________
■ I have never been hospitalized
Have you ever had a blood transfusion? ■ Y ■ N

Please list other physicians you have seen in the last 12 months, and for what reason.
(list)
*/