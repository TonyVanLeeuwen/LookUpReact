import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import LargeImageSlider from "../components/LargeImageSlider/LargeImageSlider";
import TextContainerForHomePageAndObservationPage from "../components/TextContainer/TextContainerForHomePageAndObservationPage";
import "./Pages.css"
import tenor from "../assets/tenor.gif"
import HomePage from "../components/Homepage/HomePage";

function Home() {
    return(
        <HomePage/>
    )
    // const [data, setData] = useState([]);
    //
    // useEffect(() => {
    //     axios
    //         .get("http://localhost:8080/files/allfiles")
    //         .then(response => {
    //             setData(response.data)
    //             console.log(data)
    //         })
    // }, [])
    //
    // if (!data) {
    //     return (
    //         <img src={tenor} alt="loading"/>
    //     )
    // } else {
    //     if (!localStorage.getItem("jwt")) {
    //         return (
    //             <div className="page">
    //                 <LargeImageSlider image={data[data.length - 1].url}/>
    //                 <TextContainerForHomePageAndObservationPage
    //                     title="Welcome to LookUp! - Here to remind you to LookUp!"
    //                     text="Welcome to LookUp! Your onestop shop for everything in the universe (and maybe even beyond, who knows!) check the site out and see if you'd like to join our fast growing community!"/>
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <div className="page">
    //                 <LargeImageSlider image={data[data.length - 1].url}/>
    //                 <TextContainerForHomePageAndObservationPage title="Welcome to LookUp! Don't forget to LookUp!"/>
    //             </div>
    //         )
    //     }
    // }
}

export default Home;