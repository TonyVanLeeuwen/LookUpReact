import React, {useState, useEffect} from "react";
import './ObservationForm.css'
import axios from "axios";
import {useForm} from "react-hook-form";

function ObservationForm() {
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYyODM0NjU3NSwiaWF0IjoxNjI3NDgyNTc1fQ.eUoG3pdHX1yQdZncCagavT4kAn9PDlV2Pp7PNjo31ss"
    const {handleSubmit, register} = useForm();
    const {textDescription, toggleTextDescription} = useState()
    const Submit = (d) => {
        const formData = new FormData();
        formData.append("imagefile", d.imagefile[0])
        axios
            .post("http://localhost:8080/users/uploadobservationwithimage", formData, {headers: {
                    'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error.response.data)
            })
    }

    if (!textDescription){
        return (
            <div className="ObservationFormContainer">
                <button onClick={() => toggleTextDescription}>TextDescription</button>
                <form onSubmit={handleSubmit(Submit)}>
                    <label htmlFor="">observation:
                        <input type="file" {...register("imagefile")}/>
                    </label>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    } else {
        return (
            <div className="ObservationFormContainer">
                <button onClick={() => toggleTextDescription}>textdescription</button>
                <p>you toggled textdescriptions!</p>
            </div>
        )
    }
    ;
}

export default ObservationForm;