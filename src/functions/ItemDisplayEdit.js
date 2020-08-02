import React, { useState} from 'react';


// takes props of 'edit' boolean and 'label string
// returns toggle between text or input depending on 'edit'
const ItemDisplayEdit = (props) => {
    const [inputText, setInputText] = useState("")
    const {label, edit} = props
    return (        
        <p className="">
            <div className="">{label}</div> 
            {edit ? 
                <input value ={inputText}
                    onChange={e => setInputText(e.target.value)}/> 
                    : <h3 className="">{inputText}</h3>}
        </p> 
    )
}

export default ItemDisplayEdit



