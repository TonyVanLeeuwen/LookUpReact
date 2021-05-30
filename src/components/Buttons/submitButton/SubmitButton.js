import React from "react";

function SubmitButton ({someAction, buttonName}){
    return (
        <button onClick={someAction}>{buttonName}</button>
    )
}

export default SubmitButton;