import React, {useState, useEffect} from "react";
import './ObservationForm.css'
import axios from "axios";
import {useForm} from "react-hook-form";
import {NavLink} from "react-router-dom";

function ImageObservationForm() {
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYyODM0NjU3NSwiaWF0IjoxNjI3NDgyNTc1fQ.eUoG3pdHX1yQdZncCagavT4kAn9PDlV2Pp7PNjo31ss"
    const {handleSubmit, register} = useForm();
    const Submit = (d) => {
        axios
            .post("http://localhost:8080/users/observation", d, {headers: {
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
    if (localStorage.getItem("jwt")){
        return (
            <div className="ObservationFormContainer">
                <form onSubmit={handleSubmit(Submit)}>
                    <label htmlFor="">observation:
                        <input type="Text" {...register("title")}/>
                        <textarea placeholder="describe your observation here" {...register("textDescription")}/>
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