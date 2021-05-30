import React from "react";
import './LargeImageSlider.css'
import theBigMoon from '/Users/fullred/WebstormProjects/lookupreactapp/src/assets/images/the-big-moon.jpg'
import SmallClickableOrb from "../SmallClickableOrb/smallClickableOrb";


function LargeImageSlider({image}) {
    return (
        <div className="imageContainer">
            <img src={theBigMoon} alt="" className="LargeImageSliderImage"/>
        </div>
    )
}

export default LargeImageSlider;