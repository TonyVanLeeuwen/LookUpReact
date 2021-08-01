import React, {useEffect, useState} from "react";
import "./Homepage.css"
import TextContainerForHomePageAndObservationPage from "../TextContainer/TextContainerForHomePageAndObservationPage";

function HomePage() {
    if (!localStorage.getItem("jwt")) {
        return (
            <div className="homepagecontent">
                <iframe width="1000" height="400" src="https://www.youtube.com/embed/GO5FwsblpT8"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className="video"/>
                <TextContainerForHomePageAndObservationPage
                    title="Welcome to LookUp! - Here to remind you to LookUp!"
                    text="Welcome to LookUp! Your onestop shop for everything in the universe (and maybe even beyond, who knows!) check the place out and see if you'd like to join our fast growing community! Let yourself be inspired
                        by the famous
                        Carl Sagan himself"/>
            </div>
        )
    } else {
        return (
            <div className="homepagecontent">
                <iframe width="1000" height="400" src="https://www.youtube.com/embed/GO5FwsblpT8"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className="video"/>
                <TextContainerForHomePageAndObservationPage title="Welcome back to LookUp! Don't forget to LookUp!"/>
            </div>
        )
    }
}


export default HomePage;