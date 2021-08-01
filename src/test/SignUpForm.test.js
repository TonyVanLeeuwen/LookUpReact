import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils"
import SignUpForm from "../components/Forms/SignUpForm/SignUpForm";

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

it("SignUpForm should exist if called", () => {
    act(() => {
        const form = SignUpForm

        expect(form).toBeInstanceOf(Object)
    });
})