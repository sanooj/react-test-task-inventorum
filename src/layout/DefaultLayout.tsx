import React, { ReactChild } from 'react'
import SidePanel from 'components/common/SidePanel';

import styles from "./defaultLayout.module.scss"
import Header from 'components/common/Header';

const DefaultLayout = ({ heading, children }: { heading: string, children : ReactChild }): JSX.Element => {
	return (
		<div className={styles["main"]} role="main">
			<SidePanel />
			<section className={styles["main__section"]} data-testid="appSection">
				<Header heading={heading} />
				<div className={styles.container}>{children}</div>
			</section>
		</div>
	);
};

export default DefaultLayout