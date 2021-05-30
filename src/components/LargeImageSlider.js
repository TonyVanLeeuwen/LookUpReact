import React from "react";
import theBigMoon from '/Users/fullred/WebstormProjects/lookupreactapp/src/assets/images/the-big-moon.jpg'
import SmallClickableOrb from "./smallClickableOrb";


function LargeImageSlider({image}) {
    return (
        <div>
            <img src={theBigMoon} alt="" className="LargeImageSliderImage"/>
                <SmallClickableOrb/>
                <SmallClickableOrb/>
                <SmallClickableOrb/>
                <SmallClickableOrb/>
                <SmallClickableOrb/>
                <SmallClickableOrb/>
                <SmallClickableOrb/>
        </div>
    )
}

export default LargeImageSlider;