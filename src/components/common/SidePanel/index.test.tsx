import React, { Suspense } from "react";
import { render, screen } from "@testing-library/react";
import SidePanel from "./index";
import { BrowserRouter } from "react-router-dom";
import Loader from "../Loader";


describe("Side Panel", () => {
	test("should render logo", () => {
		render(
			<BrowserRouter>
				<Suspense fallback={<Loader />}>
					<SidePanel />
				</Suspense>
			</BrowserRouter>
		);
		const logo = screen.getByTestId("logo");
		expect(logo).toBeInTheDocument();
	});

  test("should render navigation", () => {
		render(
			<BrowserRouter>
				<Suspense fallback={<Loader />}>
					<SidePanel />
				</Suspense>
			</BrowserRouter>
		);
		const navigation = screen.getByTestId("navigation");
		expect(navigation).toBeInTheDocument();
	});
});
