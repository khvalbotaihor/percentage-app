import React from "react";
import './App.css';

const InputContainer = (props: {value:number}) =>{
    return (
        <div className="inputContainer">
        <div>-</div>
        <div>
        <input
            type="text"
            value={props.value}
            onChange={()=>{}}
            defaultValue="25"/>
    </div>
    <div>+</div>
    </div>
)
}
export default InputContainer;