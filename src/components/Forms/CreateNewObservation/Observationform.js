import React from "react";
import './ObservationForm.css'
import axios from "axios";

function ObservationForm() {
    const [uploadFile, setUploadFile] = React.useState();
    const [superHero, setSuperHero] = React.useState();
    const [response, setResponse] = React.useState();

    async function postData(dataArray) {
        try {
            const result = await axios.post("http://localhost:8080/users/uploadobservationwithimage", dataArray)
            setResponse(result);
        } catch (e) {
            console.log(e)
        }
    }

    const submitForm = (event) => {
        event.preventDefault();

        const dataArray = new FormData();
        dataArray.append("uploadFile", uploadFile);

        postData(dataArray).then(r => response)
    };

    return (
        <div className="ObservationFormContainer">
            <form onSubmit={submitForm}>
                <input
                    type="text"
                    onChange={(e) => setSuperHero(e.target.value)}
                    placeholder={"Superhero Name"}
                />
                <br />
                <input type="file" onChange={(e) => setUploadFile(e.target.files)} />
                <br />
                <button type="submit" className="ObservationSubmitter">submit</button>
            </form>
        </div>
    );
}

export default ObservationForm;