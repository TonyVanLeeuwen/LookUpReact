import React, {useState} from "react";
import Profileoverview from "../components/Profilepagecomponent/Profileoverview";
import UpdateProfile from "../components/Profilepagecomponent/UpdateProfile";
import "./Pages.css"
import {NavLink} from "react-router-dom";

function Profile() {
    const [changeinfo, toggleChangeInfo] = useState(false)

    if (localStorage.getItem("jwt")){
        if (!changeinfo){
            return(
                <div className="page">
                    <Profileoverview/>
                    <button onClick={toggleChangeInfo} className="TextContainers">change info</button>
                </div>
            )
        } else {
            return(
                <UpdateProfile/>
            )
        }
    } else {
        return(
            <div className="page">
                <h3 className="TextContainers">Whoops, don't know how you got here, but please <NavLink to="/login">login</NavLink> first, else we don't know
                    what you wanted to see</h3>
            </div>
        )
    }


}

export default Profile;