import React, {useEffect, useState} from "react"
import "./Profileoverview.css"
import axios from "axios"
import {NavLink} from "react-router-dom";

function Profileoverview(){
    const token = localStorage.getItem("jwt")
    const name = localStorage.getItem("name")
    const [data, setData] = useState([])

    useEffect(() => {
        console.log(name)
        axios
            .get(`http://localhost:8080/users/user/name/${name}`, {headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                setData(response.data)
            })
    }, [])

    if (token){
        return(
            <div className="profiledata">
                <p>name: {data.name}</p>
                <p>email: {data.emailAdress}</p>
                <p>password: *******</p>
            </div>
        );
    }

}

export default Profileoverview;