import React, {useEffect, useState} from "react";
import "./ObservationOverview.css"
import axios from "axios"

function ObservationOverview(){
    const [data, setData] = useState([])
    const [observationtitle, setobservationTitle] = useState([])
    const [observationURL, setObservationURL] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:8080/observation")
            .then(response => {
                console.log(response)
                setData(response.data)
                console.log(data)
            })
    },[])

    return(
        <div className="observationlist">
            <ol> {
                observationURL.map(url => (
                        <li key={url}><img src={url}/></li>
                    ))
                }
            </ol>
        </div>
    )
}

export default ObservationOverview;