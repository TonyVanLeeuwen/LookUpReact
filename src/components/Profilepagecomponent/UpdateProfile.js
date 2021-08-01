import React, {useContext, useEffect, useState} from "react";
import "./Profileoverview.css"
import { useForm } from 'react-hook-form';
import {NavLink} from 'react-router-dom'
import {TempContext} from "../../context/TempProvider";
import axios from "axios";


function UpdateProfile() {
    const token = localStorage.getItem("jwt")
    const name = localStorage.getItem("name")
    const {handleSubmit, register} = useForm();
    const [succesfullUpdate, toggleSuccesfullUpdate] = useState(false)
    const {jwttoken} = useContext(TempContext)

    const Submit = (d) =>
        axios
            .patch(`http://localhost:8080/users/user/id/${name}`, d, {headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                toggleSuccesfullUpdate(true)
                console.log(jwttoken)
            })
            .catch(error => {
                console.log(error)
            })

    if(!succesfullUpdate){
        return (
            <div className="profiledata">
                <form onSubmit={handleSubmit(Submit)} >
                    <label htmlFor="">Current or new username:
                        <input type="text" {...register("name", {required: true})}/>
                    </label>
                    <label htmlFor="">Current or new emailAdress:
                        <input type="text" {...register("emailAdress", {required: true})}/>
                    </label>
                    <label htmlFor="">Current or new Password:
                        <input type="text" {...register("passWord", {required: true})}/>
                    </label>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        );
    } else {
        return (
            <div className="profiledata">
                Succes! Click <NavLink to="/">here</NavLink> to go to the homepage
            </div>
        )
    }

}


export default UpdateProfile;