import React, {useState, useEffect} from "react";
import './ObservationForm.css'
import axios from "axios";
import {useForm} from "react-hook-form";
import {NavLink} from "react-router-dom";

function ImageObservationForm() {
    const token = localStorage.getItem("jwt")
    const {handleSubmit, register} = useForm();
    const [data, setData] = useState([])

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

    if (localStorage.getItem("jwt")){
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
    } else {
        return(
            <div className="ObservationFormContainer">
                <h3>You don't seem to be logged in, do you want to <NavLink to="/login">login?</NavLink></h3>
                    <h4> Or do you want to <NavLink to="/signUp">signUP?</NavLink></h4>
            </div>
        );
    }
}

export default ImageObservationForm;