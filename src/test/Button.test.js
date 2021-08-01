import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils"
import ClickTheButton from "../components/Buttons/headerbutton/Button";

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

        const button = <ClickTheButton someAction={mockCallBack} buttonName="harold"/>

        expect(button).toBeInstanceOf(Object)
    });
})