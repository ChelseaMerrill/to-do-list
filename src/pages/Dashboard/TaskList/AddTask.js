import React from "react";
import '../styles/AddTask.css'
export const AddTask = ({handleChangeProp, handleAddProp}) => {
    
     return   (
        <div>
            <input type="text" onChange={handleChangeProp} className='adding'/>
            <button type="button" onClick={handleAddProp}>
                Add
            </button>
        </div>
        );
}
