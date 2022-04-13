import React from "react";

import styles from "./index.module.scss";

/**
 * Invalid Page
 * @returns JSX Element
 */
const InvalidPage = () : JSX.Element => {
	return (
		<div className={styles["content-wrapper"]}>
			<h2>Page Not found</h2>
			<p>
				The page you are looking for is not found.
				<br />
				Please make sure you have typed the correct URL.
			</p>
		</div>
	);
};

export default InvalidPage;
