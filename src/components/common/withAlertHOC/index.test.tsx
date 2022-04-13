import React, { Suspense } from "react";
import { render, screen } from "@testing-library/react";
import { withAlertHOC } from ".";
import Contacts from "containers/Contacts";
import { BrowserRouter } from "react-router-dom";
import Loader from "../Loader";


describe("Alert HOC", () => {

   const MockComponent = withAlertHOC(() => (
			<BrowserRouter>
				<Suspense fallback={<Loader />}>
					<Contacts />
				</Suspense>
			</BrowserRouter>
		));
   
	it("renders snapshot", () => {
		const { container } = render(<MockComponent />);
		expect(container).toMatchSnapshot();
	});

});
