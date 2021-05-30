import React, {useState} from "react";
import './pageheader.css'
import {NavLink} from 'react-router-dom';
import Burger from "./Burger";
import ClickTheButton from './Button';
import AvatarButton from "./Avatarbutton";

import cometLogo from '/Users/fullred/WebstormProjects/lookupreactapp/src/assets/images/cometLogo.jpg';

function PageHeader(){
    const [loggedin, setloggedin] = useState(false);

    if (loggedin) {
        return(
            <nav className="pageHeadercontainer">
                <div className="pageHeaderleftContainer"><Burger/>
                    <img src={cometLogo} alt="comet" className="logovector"/>
                    <div className="nav-container">
                        <h2><NavLink to="/">LookUp</NavLink></h2>
                    </div></div>

                <div className="pageHeaderRightContainer"><ClickTheButton someAction ="i've been clicked!" buttonName="create new Neo"/>
                    <AvatarButton/></div>
            </nav>
        )
    } else {return (
        <nav className="pageHeadercontainer">
            <div className="pageHeaderleftContainer"><Burger/>
                <img src={cometLogo} alt="comet" className="logovector"/>
                <div className="nav-container">
                    <h1><NavLink to="/">LookUP</NavLink></h1>
                </div></div>

            <div className="pageHeaderRightContainer">
                <NavLink to="Login" className="PageHeaderLoginSignupLink"><h4>login</h4></NavLink>
                <NavLink to="Login" className="PageHeaderLoginSignupLink"><h4>signUp</h4></NavLink>
                <AvatarButton/>
            </div>
        </nav>
        )
    }
}

export default PageHeader;