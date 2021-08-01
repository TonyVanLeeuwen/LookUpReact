import React, {useState} from "react";
import './pageheader.css'
import {NavLink} from 'react-router-dom';
import ClickTheButton from '../Buttons/headerbutton/Button';
import AvatarButton from "../Avatar/Avatarbutton";
import cometLogo from '../../assets/cometLogo.jpg';

function PageHeader(){
    const token = localStorage.getItem("jwt")
    const name = localStorage.getItem("name")

    if (token) {
        return(
            <nav className="pageHeadercontainer">
                <div className="pageHeaderleftContainer">
                    <img src={cometLogo} alt="comet" className="logovector"/>
                    <div className="nav-container">
                        <h2><NavLink to="/">LookUp</NavLink></h2>
                    </div></div>
                <div className="pageHeaderCenterContainer">
                    <NavLink to="/postOverview"><h4>NEO Posts</h4></NavLink>
                </div>

                <div className="pageHeaderRightContainer"><NavLink to="/createNEO"><h4>create an NEO</h4></NavLink>
                    <AvatarButton/></div>
            </nav>
        )
    } else {return (
        <nav className="pageHeadercontainer">
            <div className="pageHeaderleftContainer">
                <img src={cometLogo} alt="comet" className="logovector"/>
                <div className="nav-container">
                    <h1><NavLink to="/">LookUP</NavLink></h1>
                </div></div>

            <div className="pageHeaderCenterContainer">
                <NavLink to="/"><h4>NEO Posts</h4></NavLink>
            </div>


            <div className="pageHeaderRightContainer">
                <NavLink to="/login" className="PageHeaderLoginSignupLink"><h4>login</h4></NavLink>
                <NavLink to="/signUp" className="PageHeaderLoginSignupLink"><h4>signUp</h4></NavLink>
                <AvatarButton/>
            </div>
        </nav>
        )
    }
}

export default PageHeader;