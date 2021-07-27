import React, {useState, useEffect} from "react";
import axios from "axios";
import LargeImageSlider from "../components/LargeImageSlider/LargeImageSlider";
import TextContainerForHomePageAndObservationPage from "../components/TextContainer/TextContainerForHomePageAndObservationPage";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";

function Home() {
    const [loggedin, setloggedin] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        axios
            .get("http://localhost:8080/files/allfiles")
            .then(response => {
                setData(response.data)
                console.log(response)
            })
    }, [])

    if (!loggedin) {
        return (
            <div>
                <LargeImageSlider/>
                <TextContainerForHomePageAndObservationPage title="Welcome to LookUp! - Here to remind you to LookUp!"
                           text="Welcome to LookUp! Your onestop shop for everything in the universe (and maybe even beyond, who knows!) check the site out and see if you'd like to join our fast growing community!"/>
            </div>
        )
    } else {
        return (
            <div>
                <LargeImageSlider/>
                <TextContainerForHomePageAndObservationPage title="Welcome to LookUp! Don't forget to LookUp!"/>
            </div>
        )
    }

}

export default Home;