import './Button.css'
import React from "react";

function ClickTheButton ({someAction, buttonName}){
    return (
        <button onClick={someAction}>{buttonName}</button>
    )
}

export default ClickTheButton;