import { MouseEvent, ReactChild } from "react";

export interface UsersDataInterface {
	data: UserInterface[];
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
}

export interface UserInterface {
	id: number;
	avatar?: string;
	email: string;
	first_name: string;
	last_name: string;
	inActive?: boolean;
	editUserAction?: (ev: MouseEvent<HTMLDivElement>) => void;
}

export interface ThemeButton {
	htmlType?: "button" | "reset" | "submit";
	action?: (ev: MouseEvent<HTMLDivElement>) => void;
	size?: "large" | "middle" | "small";
	children: ReactChild;
}
export interface userEditInterface {
	firstName: string;
	lastName?: string;
	email: string;
	gender?: "male" | "female" | "other";
	department?: string;
	contribution?: string;
	isActive: boolean;
}
