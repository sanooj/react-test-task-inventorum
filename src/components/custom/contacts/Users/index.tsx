import React, { useEffect, useState } from "react";
import { Checkbox, Col, Form, Input, Modal, Radio, Row } from "antd";

import Loader from "components/common/Loader";
import { UserInterface } from "interfaces/interfaces";
import ButtonTheme from "components/common/ButtonTheme";
import styles from "./index.module.scss";
import User from "./User";
import { services } from "services/Services";
import { withAlertHOC } from "components/common/withAlertHOC";

// static Inactive id added to show inactive users
export const inActiveId = 5;

/**
 * Users component
 * @param params userData:User data, showMessage: HOC Alert Component 
 * @returns : JSX Element
 */
const Users = ({
	userData,
	showMessage,
}: {
	userData: UserInterface[];
	showMessage: any;
}): JSX.Element => {
  // Form 
	const [form] = Form.useForm();
  
	// user Edit Modal
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [currentEditingUser, setCurrentEditingUser] = useState<string>()

	// click to view modal method
	const showModal = () => {
		setIsModalVisible(true);
	};

	// active users
	const [activeUser, setActiveUser] = useState<UserInterface[]>([]);

	// Inactive users
	const [inActiveUser, setinActiveUser] = useState<UserInterface[]>([]);

	// loading when user data loaded
	useEffect(() => {
		setActiveUserData(); // filtering active users
		setInActiveUserData(); // filtering Inactive users
	}, [userData]);

	/**
	 * Filtering method for filter active data
	 */
	const setActiveUserData = () => {
		setActiveUser(userData?.filter(({ id }) => id !== inActiveId));
	};

	/**
	 * Filtering method for In-active data
	 */
	const setInActiveUserData = () => {
		setinActiveUser(userData?.filter(({ id }) => id === inActiveId));
	};

	/**
	 * User edit (set as initial values)
	 * @param user data
	 */
	const editUserAction = ({
		email,
		first_name,
		last_name,
		inActive,
		id,
	}: UserInterface) => {
    setCurrentEditingUser(`${first_name} ${last_name}`);
		showModal();
		form.setFieldsValue({
			firstName: first_name,
			lastName: last_name,
			email: email,
			isActive: !inActive,
			department: "Sales",
			gender: "male",
			uid: id,
		});
	};

	/**
	 * Modal close
	 */
	const modalClose = () => {
		setIsModalVisible(false);
	};

	/**
	 * Form on Submit finished
	 * @param values : From values
	 */
	const onFinish = (values: any) => {
		services
			.patchUserData(`users`, JSON.stringify(values))
			.then(({ data }: any) => {
				showMessage(data, "success");
			});
		modalClose();
	};

	/**
	 * Form on Submit Failed
	 * @param errorInfo : Error
	 */
	const onFinishFailed = (errorInfo: any) => {
		console.error(errorInfo);
	};

	// Single line layout
	const singleLineLayout = {
		labelCol: { span: 24 },
		wrapperCol: { span: 24 },
	};

	return (
		<>
			<div className={styles["users-panel"]}>
				<div className={styles["user-wrapper"]} data-testid="userWraper">
					{activeUser?.length || inActiveUser?.length ? (
						<>
							{activeUser?.map((userData: UserInterface) => (
								<User
									{...userData}
									key={userData.id}
									editUserAction={() => editUserAction(userData)}
								/>
							))}

							{inActiveUser?.length ? (
								<>
									<div className={`${styles["user-item"]}`}>
										<strong>Inactive users</strong>
									</div>
									{inActiveUser?.map((data: UserInterface) => (
										<User {...data} key={data.id} inActive={true} />
									))}
								</>
							) : (
								""
							)}
						</>
					) : (
						<Loader type="inline" />
					)}
				</div>
			</div>

			{/* User Edit Form  */}
			<Modal
				title={`Edit Contact ${currentEditingUser}`}
				visible={isModalVisible}
				footer={""}
				onCancel={modalClose}
			>
				<Form
					{...singleLineLayout}
					form={form}
          data-testid="formEle"
					name="control-hooks"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item name="uid" hidden={true}>
						<Input type={"hidden"} />
					</Form.Item>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								label="First Name"
								name="firstName"
								rules={[
									{ required: true, message: "Please add your username!" },
								]}
							>
								<Input data-testid="firstName" />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item label="Last Name" name="lastName">
								<Input />
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={24}>
							<Form.Item label="Gender" name="gender">
								<Radio.Group>
									<Radio value="male"> Male </Radio>
									<Radio value="female"> Femail </Radio>
									<Radio value="other"> Other </Radio>
								</Radio.Group>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={24}>
							<Form.Item
								label="Email"
								name="email"
								rules={[
									{
										type: "email",
										message: "The input is not valid E-mail!",
									},
									{
										required: true,
										message: "Please add your E-mail!",
									},
								]}
							>
								<Input data-testid="emailInput"/>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item label="Department" name="department">
								<Input />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item label="Contribution" name="contribution">
								<Input />
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={24}>
							<Form.Item name="isActive" valuePropName="checked">
								<Checkbox>is Active</Checkbox>
							</Form.Item>
						</Col>
					</Row>

					<Row gutter={6} justify="end">
						<Col span={6}>
							<ButtonTheme action={modalClose} size="middle">
								Cancel
							</ButtonTheme>
						</Col>
						<Col span={5}>
							<ButtonTheme
								htmlType="submit"
								size="middle"
							>
								Save
							</ButtonTheme>
						</Col>
					</Row>
					<Form.Item></Form.Item>
				</Form>
			</Modal>
		</>
	);
};

export default withAlertHOC(Users);
