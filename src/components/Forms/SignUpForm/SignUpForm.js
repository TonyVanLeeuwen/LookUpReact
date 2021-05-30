import React from "react";
import { useForm } from 'react-hook-form';
import './SignupForm.css'
import axios from "axios";

function SignUpForm() {
    const { handleSubmit, register } = useForm();

    async function postData(dataArray) {
        try {
            const result = await axios.post("http://localhost:8080/users/uploadobservationwithimage", dataArray)
        } catch (e) {
            console.log(e)
        }
    }

    function onFormSubmit(data) {
        console.log(postData(data))
    }

    return (
        <div className="SignUpFormForm">
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <fieldset>
                    <legend>SignUp</legend>

                    <label htmlFor="name">
                        UserName
                        <input
                            type="text"
                            id="name"
                            {...register("name")}
                        />
                    </label>

                    <label htmlFor="emailAdress">
                        PassWord
                        <input
                            type="email"
                            id="emailAdress"
                        />
                    </label>

                    <label htmlFor="passWord">
                        PassWord
                        <input
                            type="password"
                            id="passWord"
                        />
                    </label>
                </fieldset>

                <fieldset>
                    <button type="submit" className="formButton">
                        Versturen
                    </button>
                </fieldset>
            </form>
        </div>

    );
}

export default SignUpForm;