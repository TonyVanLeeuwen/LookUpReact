import React from "react";
import {findAllByDisplayValue} from "@testing-library/react";


function SmallClickableOrb({action}){
    return (
        <div className="SmallOrb" onClick={action}></div>
    )
}

export default SmallClickableOrb;