/** @format */
import { ModalAssignmentView } from "../modals";
import FeatherIcon from "feather-icons-react";
import React, { useState } from "react";
import { Card, Col, ListGroup, Row, Nav, Button } from "react-bootstrap";
import { Avatar } from "../components";

export default function ClientJournalsResult({ ...props }) {
	const data = [
		{
			id: "1",
			title: "Journals | Gratitude and Reflection",
			subtitle: "Looking at the day in a new way.",
			action: "Completed | Ready for Review",
			status: "online",
			type: "/img/svg/journals-flat.svg",
		},
		{
			id: "2",
			title: "Journals | Adult Growth Pains: New mental challenges",
			subtitle:
				"Growing isn't easy, even as an adult. Three fun growth challenges you should try.",
			action: "Pending",
			status: "",
			type: "/img/svg/journals-flat.svg",
		},
		{
			id: "3",
			title: "Journals | Under Pressure - What to Do!",
			subtitle: "Log the tough stuff you're dealing with.",
			action: "Pending",
			status: "",
			type: "/img/svg/journals-flat.svg",
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
							onClick={() => setModalAssignmentViewVisible(true)}
							href={`#!`}></Avatar.Image>
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
				<h4 className='card-header-title'>Journals & Activities</h4>
				<Nav variant='tabs' className='nav-tabs-sm'>
					<Nav.Item>
						<Nav.Link href='#!' active>
							Currently Assigned
						</Nav.Link>
					</Nav.Item>
					{/* <Nav.Item>
						<Nav.Link>Add New</Nav.Link>
					</Nav.Item> */}
				</Nav>
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
