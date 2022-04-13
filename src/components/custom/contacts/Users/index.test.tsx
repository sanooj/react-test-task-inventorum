import React from "react";
import { fireEvent, getAllByTestId, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Users from "./index";
import { usersMockData } from "mockData/mockData";


describe("Users", () => {
  beforeAll(() => {
		global.matchMedia =
			global.matchMedia ||
			function () {
				return {
					addListener: jest.fn(),
					removeListener: jest.fn(),
				};
			};
	});
  
  test("should render Users", () => {
    render(<Users userData={usersMockData}/>);
    const element = screen.getByTestId("userWraper"); 
    expect(element).toBeInTheDocument();
  });

  test("should edit user", async () => {
		render(<Users userData={usersMockData} />);
    await act(async () => {
			const { getAllByTestId, getByTestId } = screen;
			const editActionEle = getAllByTestId("editActionEle");
			await fireEvent.click(editActionEle[0]);

      const firstName = getByTestId("firstName");
      expect(firstName).toHaveValue("First");
		});
		
	});

  test("should submit if mandatory fields are filled", async () => {
		render(<Users userData={usersMockData} />);
		await act(async () => {
			const { getAllByTestId, getByTestId, getByText } = screen;
			const editActionEle = getAllByTestId("editActionEle");
			await fireEvent.click(editActionEle[1]);

			const firstName = getByTestId("firstName");
			expect(firstName).toHaveValue("First2");

      const saveButton = getAllByTestId("button");
      await fireEvent.click(saveButton[1]);
      expect(saveButton[1]).toHaveTextContent("Save");
		});
	});

  test("should not submit if mandatory fields are filled", async () => {
		render(<Users userData={usersMockData} />);
		await act(async () => {
			const { getAllByTestId, getByTestId, getByText } = screen;
			const editActionEle = getAllByTestId("editActionEle");
			await fireEvent.click(editActionEle[1]);

			const firstName = getByTestId("firstName");
			expect(firstName).toHaveValue("First2");

			const saveButton = getAllByTestId("button");
			const email = getByTestId("emailInput");
			const formEle = getByTestId("formEle");
      await fireEvent.change(email, { target: { value: " " } });
			await fireEvent.click(saveButton[1]);
			expect(saveButton[1]).toHaveTextContent("Save");
			expect(formEle).rejects;
		});
	});


});
