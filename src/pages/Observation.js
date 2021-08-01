import React from "react";
import TextObservation from "../components/Observations/TextObservation";
import ImageObservation from "../components/Observations/ImageObservation";

function Observation({id}) {
    return(
        <div className="page">
            {/*<TextObservation/>*/}
            <ImageObservation id={id}/>
        </div>

    )
}

export default Observation;