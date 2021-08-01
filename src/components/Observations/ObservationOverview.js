import React, {useEffect, useState} from "react";
import "./ObservationOverview.css"
import axios from "axios"
import {NavLink} from "react-router-dom";

function ObservationOverview(){
    const [data, setData] = useState([])

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
            <ol className="imageList"> {
                data.map(data => (
                        <li key={data.id}><img className="ObservationInList" src={data.pictureDescriptionURL}
                                               onClick={() => {
                                                   localStorage.setItem("id", data.id)
                                                   window.location = "http://localhost:3000/observation"
                                               }}/><h4>click to enlarge</h4></li>
                    ))
                }
            </ol>
        </div>
    )
}

export default ObservationOverview;