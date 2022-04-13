import React from 'react'
import { ThemeButton } from '@interfaces/interfaces';
import { Button } from 'antd';

import styles from "./index.module.scss";

/**
 * Themed Button
 * @param params - htmlType: button type, children: button HTML content, size: button size, action: button action
 * @returns JSX element
 */
const ButtonTheme = ({
	htmlType,
  children,
  size='large',
	action,
}: ThemeButton) : JSX.Element=> {
	return (
		<Button
			type="primary"
			shape="round"
			size={size}
			className={`${styles["primary-theme"]} theme-button--primary`}
			htmlType={htmlType}
			onClick={action}
			data-testid="button"
		>
			{children}
		</Button>
	);
};

export default ButtonTheme