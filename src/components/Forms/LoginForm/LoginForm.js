import React, {useContext, useEffect} from "react";
import { useForm} from 'react-hook-form';
import './LoginForm.css';
import axios from "axios";
import {TempContext} from "../../../context/TempProvider";

function LoginForm() {
    let token = 0;
    const {handleSubmit, register} = useForm();
    const {setTokenAfterLoggingIn, jwtToken} = useContext(TempContext)
    const Submit = (d) =>{

        axios
            .post("http://localhost:8080/authenticate", d)
            .then(response => {
                console.log(response)
                token = response.data.jwt
                setTokenAfterLoggingIn(token, d.username)
                console.log(`this is the ${localStorage.getItem("jwt")} this is their name ${localStorage.getItem("name")}`)
            })
    }

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