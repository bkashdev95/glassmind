/** @format */
//shows the clients most recent work - Check Ins are at the top with most recent at the very top going backwards in chronologicaly order. Shows only those items that have not yet been viewed/reviewed. Once viewed it will be filed under reviewed.
import { ModalAssignmentView } from "../modals";
import React, { useState } from "react";

import {
	Card,
	Col,
	ListGroup,
	Row,
	Overlaytrigger,
	Tooltip,
} from "react-bootstrap";
import { Avatar, Comment } from "../components";

export default function ClientDashboardClientEngagement({ ...props }) {
	//DATA#
	const data = [
		{
			id: "1",
			title: "Check In | Strong Emotions",
			subtitle: "Virtualized support for experiencing strong emotions.",
			action: "Completed | Ready for Review",
			status: "urgent",
			type: "/img/svg/check-in-flat.svg",
		},
		{
			id: "2",
			title: "Family Dynamics",
			subtitle: "Let's explore your family history and dynamics.",
			action: "Completed | Ready for Review",
			status: "online",
			type: "/img/svg/insights-flat.svg",
		},
		{
			id: "3",
			title: "GAD-7 Assessement",
			subtitle: "Please complete the following assessment.",
			action: "Pending",
			status: "",
			type: "/img/svg/assessments-flat.svg",
		},
		{
			id: "4",
			title: "Follow up: GAD-7",
			subtitle: "Share more insights on your answers.",
			action: "Pending",
			status: "",
			type: "/img/svg/followup-flat.svg",
		},
	];
	const [modalAssignmentViewVisible, setModalAssignmentViewVisible] =
		useState(false);

	const items = data.map((item, index) => (
		<ListGroup.Item key={index}>
			<Row>
				<Col xs='auto'>
					<Avatar size='md' status={item.status}>
						<Avatar.Image
							src={item.type}
							alt={item.title}
							className='rounded-circle'
						/>
					</Avatar>
				</Col>
				<Col className='ms-n2'>
					<h5 className='mb-1'>{item.title}</h5>
					<p className='small text-gray-700 mb-0'>{item.subtitle}</p>
					<a
						className='small'
						onClick={() => setModalAssignmentViewVisible(true)}
						href={`#!`}>
						{item.action}
					</a>
				</Col>
			</Row>
		</ListGroup.Item>
	));

	return (
		<Card {...props}>
			<Card.Header>
				<h4 className='card-header-title'>Client Engagement</h4>
				{/* <a className='small' href='#!'>
					Clear This List
				</a> */}
			</Card.Header>
			<Card.Body>
				<ListGroup className='list-group-flush list-group-activity my-n3'>
					{items}
				</ListGroup>
				<a className='small' href='#!'>
					View all
				</a>
			</Card.Body>
			<ModalAssignmentView
				visible={modalAssignmentViewVisible}
				onDismiss={() => setModalAssignmentViewVisible(false)}
			/>
		</Card>
	);
}
