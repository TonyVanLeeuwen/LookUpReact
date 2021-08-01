import React, {useState} from "react";
import Profileoverview from "../components/Profilepagecomponent/Profileoverview";

import {findAllByDisplayValue} from "@testing-library/react";
import UpdateProfile from "../components/Profilepagecomponent/UpdateProfile";

function Profile() {
    const [changeinfo, toggleChangeInfo] = useState(false)

    if (!changeinfo){
        return(
            <div>
                <Profileoverview/>
                <button onClick={toggleChangeInfo}>change info</button>
            </div>
        )
    } else {
       return(
            <UpdateProfile/>
        )
    }

}

export default Profile;