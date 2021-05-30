import React from "react";
import './SmallClickableOrb.css'


function SmallClickableOrb({action}){
    return (
        <div className="SmallOrb" onClick={action}></div>
    )
}

export default SmallClickableOrb;