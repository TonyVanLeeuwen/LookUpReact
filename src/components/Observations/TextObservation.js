import React, {useEffect, useState} from "react"
import "./TextObservation.css"
import axios from "axios";

function TextObservation() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:8080/observation/id/6")
            .then(response => {
                setData(response.data.body)
                console.log(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return(
        <div>
            <h1 className="observationtitle">{data.title}</h1>
            <p className="observationTextDescription">{data.textDescription}</p>
        </div>
    );
}

export default TextObservation;

