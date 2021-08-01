import React from "react";
import ImageObservationForm from "../components/Forms/CreateNewObservation/ImageObservationForm";
import "./Pages.css"
import TextObservationForm from "../components/Forms/CreateNewObservation/TextObservationForm";

function CreateNeo() {
    return(
        <div className="page">
            <ImageObservationForm/>
            {/*<TextObservationForm/>*/}
        </div>
    )
}

export default CreateNeo;