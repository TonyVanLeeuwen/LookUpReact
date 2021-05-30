import React from "react";
import { useForm } from 'react-hook-form';
import './LoginForm.css';
import axios from "axios";


function LoginForm() {
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
        <div className="LoginFormForm">
            <form onSubmit={handleSubmit(onFormSubmit)} >
                <fieldset>
                    <legend>Login</legend>

                    <label htmlFor="name">
                        UserName
                        <input
                            type="text"
                            id="name"
                            {...register("name")}
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

export default LoginForm;