/** @format */
import { ModalAssignmentView } from "../modals";
import React, { useState } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { Avatar } from "../components";

export default function DashboardCheckinResults({ ...props }) {
	const data = [
		{
			subtitle: "Check In: Strong Emotion",
			//Add logic to set type: "skillsbuilding" and that maps to function that directs it to load the right SVG from the local public SVG folder
			imgSrc: "/img/avatars/profiles/avatar-1.jpg",
			status: "urgent",
			time: "9:48pm on 11-21-22",
			title: "Dianna Smiley",
			action: "Review Client Check In",
		},
		{
			subtitle: "Check In: Difficult Situation",
			imgSrc: "/img/avatars/profiles/avatar-2.jpg",
			status: "urgent",
			time: "1:48am on 11-21-22",
			title: "Ab Hadley",
			action: "Review Client Check In",
		},
		{
			subtitle: "Check In: Strong Emotion",
			imgSrc: "/img/avatars/profiles/avatar-3.jpg",
			status: "urgent",
			time: "8:17 am on 11-21-22",
			title: "Adolfo Hess",
			action: "Review Client Check In",
		},
	];

	const [modalAssignmentViewVisible, setModalAssignmentViewVisible] =
		useState(false);

	const items = data.map((item, index) => (
		<ListGroup.Item key={index}>
			<Row>
				<Col xs='auto'>
					<Avatar size='sm' status={item.status}>
						<Avatar.Image
							src={item.imgSrc}
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
				<h2 className='card-header-title'>Check Ins</h2>
				<a className='small' href='#!'>
					Clear all
				</a>
			</Card.Header>
			<Card.Body>
				<ListGroup className='list-group-flush list-group-activity my-n3'>
					{items}
				</ListGroup>
			</Card.Body>
			<ModalAssignmentView
				visible={modalAssignmentViewVisible}
				onDismiss={() => setModalAssignmentViewVisible(false)}
			/>
		</Card>
	);
}
