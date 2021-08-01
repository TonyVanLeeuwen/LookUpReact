import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils"
import ImageObservationForm from "../components/Forms/CreateNewObservation/ImageObservationForm";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("Observationform should exist if called", () => {
    act(() => {
        const form = ImageObservationForm

        expect(form).toBeInstanceOf(Object)
    });
})