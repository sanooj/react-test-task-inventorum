import React from "react";
import { render, screen } from "@testing-library/react";
import Loader from "./index";


describe("Loader", () => {
	test("should render full page loader", () => {
		render(<Loader />);
		const fullPageLoader = screen.getByTestId("fullPageLoader");
		expect(fullPageLoader).toBeInTheDocument();
	});
	
  test("should render inline loader", () => {
		render(<Loader type="inline"/>);
		const inlineLoader = screen.getByTestId("inlineLoader");
		expect(inlineLoader).toBeInTheDocument();
	});
});
