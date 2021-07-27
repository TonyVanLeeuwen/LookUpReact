import React from "react";
import './LargeImageSlider.css'
import theBigMoon from '../../assets/the-big-moon.jpg'


function LargeImageSlider({image}) {
    return (
        <div className="imageContainer">
            <img src={theBigMoon} alt="" className="LargeImageSliderImage"/>
        </div>
    )
}

export default LargeImageSlider;