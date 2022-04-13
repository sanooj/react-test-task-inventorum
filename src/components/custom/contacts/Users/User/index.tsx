import React from "react";
import { UserInterface } from "@interfaces/interfaces";

import styles from "./index.module.scss";

/**
 * User Item
 * @param params - Avatar: user Avatar, first_name : First name, last_name: Last name, id: user id, email: User email, inactive: In active user
 * @returns : JSX Element
 */

const User = ({
	avatar,
	email,
	first_name,
	id,
	last_name,
	inActive,
  editUserAction
}: UserInterface): JSX.Element => {

	return (
		<div
			className={`${styles["user-item"]} ${
				inActive ? styles["user-item--inactive"] : ""
			}`}
      data-testid="editActionEle"
			onClick={editUserAction}
		>
			<div
				className={`${styles["user-item__column"]} ${styles["user-item__column--name"]}`}
			>
				{avatar && (
					<i className={styles["user-item__profile-icon"]}>
						<img src={avatar} alt={first_name} data-testid="avatar" />
					</i>
				)}
				<span data-testid="fullName">
					{first_name} {last_name}
				</span>
			</div>
			<div className={styles["user-item__column"]} data-testid="department">
				Sales
			</div>
			<div className={styles["user-item__column"]}>
				<a href="mailto:jamesred@gmail.com" data-testid="email">
					{email}
				</a>
			</div>
			<div className={styles["user-item__column"]} data-testid="tel">
				<a href="tel:+0305683294136">0305683294136</a>
			</div>
		</div>
	);
};

export default User;
