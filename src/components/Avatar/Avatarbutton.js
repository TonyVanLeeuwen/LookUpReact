import React, {useState} from 'react'
import './AvatarButton.css'


function AvatarButton(){
const [loggedIn, setLoggedIn] = useState(false)

    if (!loggedIn){
        return (
            <div className="smallRoundedButton">LU</div>
        )
    }


}

export default AvatarButton