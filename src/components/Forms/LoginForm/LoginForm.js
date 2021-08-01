import React, {useContext, useEffect} from "react";
import { useForm} from 'react-hook-form';
import '../FormStyling.css';
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
        <div className="FormContainer">
            <form onSubmit={handleSubmit(Submit)} >
                <ul className="formwrapper">
                    <li className="form-row">
                        <label htmlFor="">Username:
                        <input type="text" {...register("username")}/>
                        </label>
                    </li>
                    <li className="form-row">
                        <label htmlFor="">Password:
                            <input type="password" {...register("password")}/>
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


export default LoginForm;