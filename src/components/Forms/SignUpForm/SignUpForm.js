import React from "react";
import { useForm } from 'react-hook-form';
import './SignupForm.css'
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
        <div className="LoginFormForm">
            <form onSubmit={handleSubmit(Submit)} >
                <label htmlFor="">name:
                    <input type="text" {...register("name")}/>
                </label>
                <label htmlFor="">email:
                    <input type="text" {...register("emailAdress")}/>
                </label>
                <label htmlFor="">Password:
                    <input type="text" {...register("passWord")}/>
                </label>
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
}

export default SignUpForm;