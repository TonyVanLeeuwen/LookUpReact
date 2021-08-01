import React, {useState, useEffect} from "react";
import './ObservationForm.css'
import axios from "axios";
import {useForm} from "react-hook-form";

function ImageObservationForm() {
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYyODM0NjU3NSwiaWF0IjoxNjI3NDgyNTc1fQ.eUoG3pdHX1yQdZncCagavT4kAn9PDlV2Pp7PNjo31ss"
    const {handleSubmit, register} = useForm();
    const [data, setData] = useState([])
    let observationid;

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
                setData(response.data)
            })
            .catch(error => {
                console.log(error.response)
            })
    }

        return (
            <div className="ObservationFormContainer">
                <form onSubmit={handleSubmit(Submit)}>
                    <label htmlFor="">observation:
                        <input type="text" {...register("title")}/>
                        <input type="file" {...register("imagefile")}/>
                    </label>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        );
}

export default ImageObservationForm;