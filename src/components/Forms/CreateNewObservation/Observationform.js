import React from "react";
import './ObservationForm.css'
import axios from "axios";
import {useForm} from "react-hook-form";

function ObservationForm() {
    const {handleSubmit, register} = useForm();
    const Submit = (d) =>
        axios
            .post("http://localhost:8080/users/uploadobservationwithimage", {d}, {headers: {
                'Authorization': "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjI4MjU1ODg4LCJpYXQiOjE2MjczOTE4ODh9.9ouFBf5gyOHvrtBDfY8vi3CTSBwgQgDH3AIVW-suuBs"
                }})
            .then(response => {
                console.log(response)
            })

    return (
        <div className="ObservationFormContainer">
            <form onSubmit={handleSubmit(Submit)} >
                <label htmlFor="">observation:
                    <input type="file" {...register("picture")}/>
                </label>
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
}

export default ObservationForm;