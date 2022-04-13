import styles from "./index.module.scss";

/**
 * Loader
 * @param type : loader type 
 * @returns : JSX element
 */
const Loader = ({ type }: { type?: "inline" }): JSX.Element => {
	return (
		<>
			{type === "inline" ? (
				<div
					className={`${styles["loader"]} ${styles["loader--inline"]}`}
					data-testid="inlineLoader"
				></div>
			) : (
				<div className={styles["loader-wrapper"]} data-testid="fullPageLoader">
					<div className={styles["loader"]}></div>
					<div className={styles["loading-text"]}>
						Please wait.
						<br />
						Loading ....
					</div>
				</div>
			)}
		</>
	);
};

export default Loader;
