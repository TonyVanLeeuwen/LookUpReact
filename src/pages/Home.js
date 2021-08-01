import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import LargeImageSlider from "../components/LargeImageSlider/LargeImageSlider";
import TextContainerForHomePageAndObservationPage from "../components/TextContainer/TextContainerForHomePageAndObservationPage";
import {TempContext} from "../context/TempProvider";

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/files/allfiles")
            .then(response => {
                setData(response.data)
            })
    }, [])

    if (!localStorage.getItem("jwt")) {
        return (
            <div>
                <LargeImageSlider image={data.url}/>
                <TextContainerForHomePageAndObservationPage title="Welcome to LookUp! - Here to remind you to LookUp!"
                           text="Welcome to LookUp! Your onestop shop for everything in the universe (and maybe even beyond, who knows!) check the site out and see if you'd like to join our fast growing community!"/>
            </div>
        )
    } else {
        return (
            <div>
                <LargeImageSlider image={data.url}/>
                <TextContainerForHomePageAndObservationPage title="Welcome to LookUp! Don't forget to LookUp!"/>
            </div>
        )
    }

}

export default Home;