import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils"
import AvatarButton from "../components/Avatar/Avatarbutton";

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

it("should render a navigationlink", () => {
    act(() => {
        render(<AvatarButton/>, container);
    });
    expect(container).toReturn()
})

