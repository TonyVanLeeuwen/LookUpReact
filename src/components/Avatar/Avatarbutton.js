import React from 'react'
import './AvatarButton.css'
import {NavLink} from "react-router-dom";

function AvatarButton(){
        const name = localStorage.getItem("name")

        return (
            <div className="smallRoundedButton"><NavLink to="profile" clasname="smallRoundedButton">{name}</NavLink></div>
        )
}

export default AvatarButton