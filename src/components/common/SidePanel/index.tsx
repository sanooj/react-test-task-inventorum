import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import styles from "./index.module.scss";
/**
 * Side panel
 * @returns : JSX Element
 */
const SidePanel = () : JSX.Element => {
  return (
		<aside className={styles["side-navigation"]}>
			<Link to={"/"} className={styles.logo}>
				<img src="/images/logo.svg" alt="Inventorum" data-testid="logo" />
			</Link>
			<nav className={styles.nav} data-testid="navigation">
				{SIDE_NAVIGATION.map(({text, url}, index: number) => (
				<NavLink
					to={url}
          key={index}
					className={({ isActive }: { isActive: any }) =>
						isActive
							? `${styles["nav__item"]} ${styles["nav__item--active"]}`
							: `${styles["nav__item"]}`
					}
				>
					<i className="icon-monitor" /> {text}
				</NavLink>
        ))}
			</nav>
		</aside>
	);
}

export default SidePanel;

// side navigation
const SIDE_NAVIGATION : {text:string, url: string}[] = [
	{ text: "Point of sales", url: "/ponts-of-sale" },
	{ text: "Invoices & returns", url: "/invoice-returns" },
	{ text: "Contacts", url: "/contacts" },
	{ text: "Inventory", url: "/inventory" },
	{ text: "Reports", url: "/reports" },
	{ text: "Settings", url: "/settings" },
	{ text: "Imprint", url: "/imprint" },
];