import React from "react";
import ImageObservationForm from "../components/Forms/CreateNewObservation/ImageObservationForm";
import TextObservationForm from "../components/Forms/CreateNewObservation/TextObservationForm";

function CreateNeo() {
    return(
        <div>
            <ImageObservationForm/>
            <TextObservationForm/>
        </div>
    )
}

export default CreateNeo;