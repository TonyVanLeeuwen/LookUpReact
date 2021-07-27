import React from "react";
import './ObservationForm.css'
import axios from "axios";
import {useForm} from "react-hook-form";

function ObservationForm() {
    const {handleSubmit, register} = useForm();
    const Submit = (d) =>
        axios
            .post()

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