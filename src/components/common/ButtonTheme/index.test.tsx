import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonTheme from "./index";


describe("Button", () => {
	test("should render button text", () => {
		render(<ButtonTheme>Save</ButtonTheme>);
		const button = screen.getByTestId("button");
		expect(button).toHaveTextContent("Save");
	});
});
