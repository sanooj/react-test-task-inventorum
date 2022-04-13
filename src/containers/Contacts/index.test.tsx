import React, { Suspense } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Contacts from "./index";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import Loader from "components/common/Loader";
import { usersMockData } from "mockData/mockData";

describe("Contacts", () => {

  beforeEach(() => {
    jest.fn(() => Promise.resolve(usersMockData));
  })
  
  test("should render Contact", () => {
    render(
			<BrowserRouter>
      <Suspense fallback={<Loader />}>
				<Contacts />
      </Suspense>
			</BrowserRouter>
		);
    const element = screen.getByTestId("searchField");
    expect(element).toBeInTheDocument();
  });

  it("should search", async () => {
		render(<Contacts />, { wrapper: BrowserRouter });
		await act(async () => {
			const { getByTestId } = screen;
			const searchInput = getByTestId("searchInput");
			await fireEvent.change(searchInput, { target: { value: "First" } });

      expect(searchInput).toHaveValue('First');

		});
	});
});
