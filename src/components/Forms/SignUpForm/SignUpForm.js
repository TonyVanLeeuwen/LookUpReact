import React from "react";
import { useForm } from 'react-hook-form';
import "../FormStyling.css"
import axios from "axios";

function SignUpForm() {
    const { handleSubmit, register } = useForm();
    const Submit = (d) =>
        axios
            .post("http://localhost:8080/user", d)
            .then(response => {
                console.log(response.data)
                axios
                    .post("http://localhost:8080/authenticate", d)
                    .then(loginResponse => {

                    })
            })


    return (
        <div className="FormContainer">
            <form onSubmit={handleSubmit(Submit)} >
                <ul className="formwrapper">
                    <li className="form-row">
                        <label htmlFor="">name:
                            <input type="text" {...register("name")}/>
                        </label>
                    </li>
                    <li className="form-row">
                        <label htmlFor="">email:
                            <input type="text" {...register("emailAdress")}/>
                        </label>
                    </li>
                    <li className="form-row">
                        <label htmlFor="">Password:
                            <input type="password" {...register("passWord")}/>
                        </label>
                    </li>
                    <li id="observationsubmitterlistitem">
                        <input type="submit" value="submit" className="ObservationSubmitter"/>
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default SignUpForm;