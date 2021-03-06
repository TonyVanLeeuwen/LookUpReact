import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils"
import LoginForm from "../components/Forms/LoginForm/LoginForm";

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

it("loginform should exist if called", () => {
    act(() => {
        const form = LoginForm

        expect(form).toBeInstanceOf(Object)
    });
})