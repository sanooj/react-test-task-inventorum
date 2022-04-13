import React from "react";
import { message } from "antd";

/**
 * HOC Alert component
 * @param WrappedComponent : wrapped Component
 */
export const withAlertHOC = (WrappedComponent: any) =>
	function Comp(props: any) {
		const showMessage = (messageText = 'error', severity = "error") => {
			switch (severity) {
				case "success":
					message.success(messageText);
					break;
				case "error":
					message.error(messageText);
					break;
				default:
					message.warning(messageText);
					break;
			}
		};

		return <WrappedComponent {...props} showMessage={showMessage} />;
	};
