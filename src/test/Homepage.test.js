import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils"
import HomePage from "../components/Homepage/HomePage";

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

it("should render a homepage", () => {
    act(() => {
        let didrender = false;

        if(render(<HomePage/>, container)){
            didrender = true
        }
        expect(didrender).toBeTruthy()
    });

})