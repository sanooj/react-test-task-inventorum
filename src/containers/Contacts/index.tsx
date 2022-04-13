import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

import styles from "./index.module.scss";
import DefaultLayout from "layout/DefaultLayout";
import Users from "components/custom/contacts/Users";
import ButtonTheme from "components/common/ButtonTheme";
import { services } from "services/Services";
import { UserInterface, UsersDataInterface } from "@interfaces/interfaces";
import debouce from "lodash.debounce";
import { withAlertHOC } from "components/common/withAlertHOC";

/**
 * Contact page
 * @param showMessage : HOC Alert Component 
 * @returns JSX Element
 */
const Contacts = ({ showMessage }: { showMessage: any }): JSX.Element => {
	// users state
	const [usersData, setUsersData] = useState<UserInterface[]>([]);
	const [usersItem, setUsersItem] = useState<UserInterface[]>([]);

	/**
	 * get User Data
	 */
	const getUserData = (params: string) => {
		services
			.getUserData(`users?${params}`)
			.then(({ data }: UsersDataInterface) => {
				setUsersData(data);
				setUsersItem(data);
			}).catch((err) => {
        	showMessage(err, "error");
      });
	};

	// initial loading
	useEffect(() => {
    // loading complete user data
		getUserData("per_page=12");
	}, []);

	/**
	 * On Search method
	 * @param e : change event
	 */
	const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
		// search value
		const targetValue = e.target.value;

		// filter search value
		const searchedUserResults = usersData.filter(
			({ first_name, last_name }) => {
				const fullName = `${first_name} ${last_name}`;
				return fullName?.toLowerCase().includes(targetValue?.toLowerCase());
			}
		);
		setUsersItem(searchedUserResults);
	};

	/**
	 * Debounce ( Memo on users data loaded)
	 */
	const debouncedSearchResults = useMemo(() => {
		return debouce(onSearch, 300);
	}, [usersData]);

	/**
	 * useEffect clean up any side effects from debounce when our component gets unmounted
	 */
	useEffect(() => {
		return () => {
			debouncedSearchResults.cancel();
		};
	});

	return (
		<DefaultLayout heading="Users">
			<section>
				<div className={styles["form-field"]} data-testid="searchField">
					<div
						className={`${styles["form-field__item"]} ${styles["form-field__item--search"]}`}
					>
						<Input
							type={"search"}
							placeholder="Search user"
							prefix={<SearchOutlined />}
							onChange={debouncedSearchResults}
							prefixCls="search"
              data-testid="searchInput"
						/>
					</div>
					<div
						className={`${styles["form-field__item"]} ${styles["form-field__item--add-button"]}`}
					>
						<ButtonTheme>Add</ButtonTheme>
					</div>
				</div>

				<Users userData={usersItem} />
			</section>
		</DefaultLayout>
	);
};

export default withAlertHOC(Contacts);
