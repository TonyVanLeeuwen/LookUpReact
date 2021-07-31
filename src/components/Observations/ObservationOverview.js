import React, {useEffect, useState} from "react";
import "./ObservationOverview.css"
import axios from "axios"

function ObservationOverview(){
    const [data, setData] = useState()

    useEffect(() => {
        axios
            .get("http://localhost:8080/observation")
            .then(response => {
                console.log(response.data)
                setData(response.data)
                console.log(data)
            })
    },[])

    return(
        <div className="observationlist">
            <p>this is where the data goes</p>
        </div>
    )
}

export default ObservationOverview;