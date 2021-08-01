import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils"
import SubmitButton from "../components/Buttons/submitButton/SubmitButton";

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

it("should render generic button", () => {
    act(() => {
        const mockCallBack = jest.fn();

        const button = <SubmitButton someAction={mockCallBack} buttonName="harold"/>

        expect(button).toBeInstanceOf(Object)
    });
})