import React, { useState} from 'react';

// takes props of 'edit' boolean and 'label string
// returns toggle between text or input depending on 'edit'
const CheckboxDisplayEdit = (props) => {
    const [isChecked, setChecked] = useState(false)
    const {label, edit} = props
    return (        
        <>
            {edit ? 
            <label>
            <input name="isChecked" 
                type="checkbox"
                checked={isChecked}
                onChange={()=> setChecked(!isChecked)}/>
                {label}
            </label>
                    : isChecked ? 
                        <p>{label}</p>
                        : ""}
        </> 
    )
}

export default CheckboxDisplayEdit



