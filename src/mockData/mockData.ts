import { UserInterface } from "@interfaces/interfaces";

export const userMockData : UserInterface = {
	email: "test@test.com",
	first_name: "First",
	id: 1,
	last_name: "Last",
	avatar: "image.png",
	inActive: true,
};

export const usersMockData: UserInterface[] = [
	{
		email: "test@test.com",
		first_name: "First",
		id: 1,
		last_name: "Last",
		avatar: "image.png",
		inActive: true,
	},
	{
		email: "test2@test.com",
		first_name: "First2",
		id: 2,
		last_name: "Last2",
		avatar: "image2.png",
		inActive: true,
	},
];
