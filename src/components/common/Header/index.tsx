import React from "react";

import styles from "./index.module.scss";


/**
 * Header component
 * @param Heading : string value
 * @returns JSX Element
 */
const Header = ({heading}: {heading: string}) : JSX.Element => {
	return (
		<header className={styles["header"]}>
			<div
				className={`${styles["header__panel"]} ${styles["header__panel--left"]}`}
			>
				<i className="icon-burger-menu" />
				<h2 data-testid="mainHeading">{heading}</h2>
			</div>
			<div
				className={`${styles["header__panel"]} ${styles["header__panel--right"]}`}
			>
				<i className={styles["user-icon"]}>
					<img src="/images/profile-lock.svg" alt="profile" />{" "}
				</i>
				<a>
					Patricia Kasse <i className="icon-triangle" />
				</a>
			</div>
		</header>
	);
};

export default Header;
