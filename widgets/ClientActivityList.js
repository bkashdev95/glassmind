/** @format */

import FeatherIcon from "feather-icons-react";
import React from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { Avatar } from "../components";

export default function ClientActivityList({ ...props }) {
	const data = [
		{
			icon: "activity",
			title: "GAD-7 Assessement",
			subtitle: "Please complete the following assessment.",
			time: "View Assignment",
		},
		{
			icon: "repeat",
			title: "Follow up: GAD-7",
			subtitle: "Share more insights on your answers.",
			time: "View Assignment",
		},
		{
			icon: "help-circle",
			title: "Family Dynamics",
			subtitle: "Let's explore your family history.",
			time: "View Assignment",
		},
	];

	const items = data.map((item, index) => (
		<ListGroup.Item key={index}>
			<Row>
				<Col xs='auto'>
					<Avatar size='sm' status={item.status}>
						<Avatar.Title className='rounded-circle bg-primary-soft fs-lg text-primary'>
							<FeatherIcon icon={item.icon} size='1em' />
						</Avatar.Title>
					</Avatar>
				</Col>
				<Col className='ms-n2'>
					<h5 className='mb-1'>{item.title}</h5>
					<p className='small text-gray-700 mb-0'>{item.subtitle}</p>
					<a className='small' href='#!'>
						{item.time}
					</a>
				</Col>
			</Row>
		</ListGroup.Item>
	));

	return (
		<Card {...props}>
			<Card.Header>
				<h4 className='card-header-title'>Most Recent Activity</h4>
				<a className='small' href='#!'>
					View all
				</a>
			</Card.Header>
			<Card.Body>
				<ListGroup className='list-group-flush list-group-activity my-n3'>
					{items}
				</ListGroup>
			</Card.Body>
		</Card>
	);
}
