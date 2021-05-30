import React from "react";
import './TextContainerForHomePageAndObservationPage.css'

function TextContainerForHomePageAndObservationPage({title, text}) {
    return(
        <div className="TextContainerForHomePageAndObservationPageContainer">
            <div className="textAndTitleContainer">
                <h2 className="TextContainerTitle">{title}</h2>
                <p className="TextContainerText">{text}</p>
            </div>

        </div>
    )
}

export default TextContainerForHomePageAndObservationPage;

