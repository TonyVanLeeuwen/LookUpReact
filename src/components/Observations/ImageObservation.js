import React, {useEffect, useState} from "react"
import "./TextObservation.css"
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
        <div>
            <h1 className="observationtitle">{data.title}</h1>
            <img src={data} alt="there should be an image here"/>
        </div>
    );
}

export default ImageObservation;