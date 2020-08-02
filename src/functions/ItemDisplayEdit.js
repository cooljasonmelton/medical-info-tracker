import React, { useState} from 'react';

const ItemDisplayEdit = (props) => {
    const [inputText, setInputText] = useState("")
    const {label, edit} = props
    return (        
        <p className="">
            <div className="">{label}</div> 
            {edit ? 
                <input onChange={e => setInputText(e.target.value)}/> 
                    : <h3 className="">{inputText}</h3>}
        </p> 
    )

}

export default ItemDisplayEdit



