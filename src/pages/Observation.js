import React from "react";
import ImageObservation from "../components/Observations/ImageObservation";

function Observation({id}) {
    return(
        <div className="page">
            <ImageObservation id={id}/>
        </div>

    )
}

export default Observation;