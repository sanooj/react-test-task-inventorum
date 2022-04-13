import React from "react";
import { render, screen } from "@testing-library/react";
import User from "./index";
import { userMockData } from "mockData/mockData";


describe("User", () => {
	test("should render User name", () => {
		render(<User {...userMockData} />);
		const element = screen.getByTestId("fullName");
		expect(element).toHaveTextContent("First Last");
	});

	test("should render Image", () => {
		render(<User {...userMockData} />);
		const element = screen.getByTestId("avatar");
		expect(element).toBeTruthy()
	});
	
  test("should render email", () => {
		render(<User {...userMockData} />);
		const element = screen.getByTestId("email");
		expect(element).toHaveTextContent('test@test.com')
	});

  test("should render department", () => {
		render(<User {...userMockData} />);
		const element = screen.getByTestId("department");
		expect(element).toBeTruthy()
	});
  
  test("should render phone", () => {
		render(<User {...userMockData} />);
		const element = screen.getByTestId("tel");
		expect(element).toBeTruthy()
	});
});
