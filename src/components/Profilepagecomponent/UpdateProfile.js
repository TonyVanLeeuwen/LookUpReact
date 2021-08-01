import React, {useEffect, useState} from "react";
import "./Profileoverview.css"
import { useForm } from 'react-hook-form';
import {NavLink} from 'react-router-dom'
import axios from "axios";


function UpdateProfile() {
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYyODM0NjU3NSwiaWF0IjoxNjI3NDgyNTc1fQ.eUoG3pdHX1yQdZncCagavT4kAn9PDlV2Pp7PNjo31ss"
    const {handleSubmit, register} = useForm();
    const [succesfullUpdate, toggleSuccesfullUpdate] = useState(false)

    const Submit = (d) =>
        axios
            .patch("http://localhost:8080/users/user/id/admin", d, {headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                toggleSuccesfullUpdate(true)
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