import React from "react";
import { useForm } from 'react-hook-form';
import './LoginForm.css';
import axios from "axios";


function LoginForm() {
    const { handleSubmit, register } = useForm();
    const Submit = (d) =>
        axios
            .post("http://localhost:8080/authenticate", d)
            .then(response => {
                console.log(response.data)
            })

    return (
        <div className="LoginFormForm">
            <form onSubmit={handleSubmit(Submit)} >
                <label htmlFor="">Username:
                    <input type="text" {...register("username")}/>
                </label>
                <label htmlFor="">Password:
                    <input type="text" {...register("password")}/>
                </label>
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
}


export default LoginForm;