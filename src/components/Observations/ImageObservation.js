import React, {useEffect, useState} from "react"
import "./TextObservation.css"
import "./ImageObservation.css"
import thebigmoon from "../../assets/the-big-moon.jpg"
import axios from "axios";

function ImageObservation() {
    const [data, setData] = useState([])
    const observationID = localStorage.getItem("id")

    useEffect(() => {
        axios
            .get(`http://localhost:8080/observation/id/${observationID}`)
            .then(response => {
                setData(response.data.body.pictureDescriptionURL)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return(
        <div className="singleImageContainer">
            <h1 className="observationtitle">{data.title}</h1>
            <img src={thebigmoon} alt="there should be an image here" className="singleImage"/>
        </div>
    );
}

export default ImageObservation;