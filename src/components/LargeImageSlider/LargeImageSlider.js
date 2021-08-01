import React from "react";
import './LargeImageSlider.css'

function LargeImageSlider({image}) {
    return (
        <div className="imageContainer">
           <img src={image} alt="" className="LargeImageSliderImage"/>
        </div>
    )
}

export default LargeImageSlider;