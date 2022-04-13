import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./index";


describe("Header", () => {
	test("should render heading", () => {
		render(<Header heading="heading" />);
		const mainHeading = screen.getByTestId("mainHeading");
		expect(mainHeading).toHaveTextContent("heading");
	});
});
