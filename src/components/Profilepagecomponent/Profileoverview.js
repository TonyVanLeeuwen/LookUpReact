import React, {useEffect, useState} from "react"
import "./Profileoverview.css"
import axios from "axios"

function Profileoverview(){
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYyODM0NjU3NSwiaWF0IjoxNjI3NDgyNTc1fQ.eUoG3pdHX1yQdZncCagavT4kAn9PDlV2Pp7PNjo31ss"
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:8080/users/user/name/admin", {headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data)
                setData(response.data)
            })
    }, [])

    return(
        <div className="profiledata">
            <p>naam: {data.name}</p>
            <p>email: {data.emailAdress}</p>
            <p>password: *******</p>
        </div>
    );
}

export default Profileoverview;