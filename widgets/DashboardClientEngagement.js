/** @format */
import FeatherIcon from "feather-icons-react";
import Link from "next/link";
import React from "react";
import { Button, Card, Col, ProgressBar, Row, Table } from "react-bootstrap";
import { Avatar } from "../components";
import { getStatusColor } from "../helpers";

export default function ClientEngagementList({ ...props }) {
	const data = [
		{
			hours: 1.2,
			imgSrc: "/img/avatars/profiles/avatar-1.jpg",
			progress: 85,
			week: 2,
			stage: "Onboarding",
			alert: "urgent",
			status: "engaged",
			name: "Dianna Smiley",
		},
		{
			hours: 1.25,
			imgSrc: "/img/avatars/profiles/avatar-2.jpg",
			progress: 55,
			week: 2,
			stage: "Intake",
			alert: "",
			status: "engaged",
			name: "Ab Hadley",
		},
		{
			hours: 2.5,
			imgSrc: "/img/avatars/profiles/avatar-3.jpg",
			progress: 100,
			week: 4,
			stage: "Ready for Assignments",
			alert: "",
			status: "completed",
			name: "Adolfo Hess",
		},
		{
			hours: 0.5,
			imgSrc: "/img/avatars/profiles/avatar-4.jpg",
			progress: 15,
			week: 2,
			stage: "Intake",
			alert: "",
			status: "delayed",
			name: "Daniela Dewitt",
		},
		{
			hours: 0.5,
			imgSrc: "/img/avatars/profiles/avatar-7.jpg",
			progress: 20,
			week: 3,
			stage: "Onboarding",
			alert: "",
			status: "delayed",
			name: "Michael Harley",
		},
	];

	const items = data.map((item, index) => (
		<tr key={index}>
			<td>
				<Link href='/client-dashboard' passHref>
					<Avatar as='a' size='sm' status={item.alert} className='me-4'>
						<Avatar.Image
							src={item.imgSrc}
							className='rounded-circle'
							alt={item.name}
							status={item.alert}
						/>
					</Avatar>
				</Link>
				<a href='/client-dashboard'> {item.name}</a>
			</td>
			<td>
				<Button
					variant='white'
					size='sm'
					href={"/client-assignments-current"}
					className='ms-1'>
					<FeatherIcon
						icon='corner-down-right'
						size='1.25em'
						className='me-1'
					/>{" "}
					Assignments
				</Button>
			</td>
			<td>
				<Row className='align-items-center g-0'>
					<Col xs='auto'>
						<span className='me-2'>{item.progress}%</span>
					</Col>
					<Col>
						<ProgressBar
							now={item.progress}
							variant='primary'
							className='progress-sm'
						/>
					</Col>
				</Row>
			</td>
			<td></td>
			<td>
				<span className={`text-${getStatusColor(item.status)}`}>●</span>{" "}
				{item.stage}
			</td>
			<td>Week {item.week}</td>

			{/* <td>{item.hours}</td> */}
		</tr>
	));

	return (
		<Card {...props}>
			<Card.Header>
				<span className='h2 mb-0'>Client Engagement</span>
				<a className='small' href='#!'>
					View all
				</a>
			</Card.Header>
			<Table size='sm' className='card-table table-wrap' hover responsive>
				<thead>
					<tr>
						<th className='text-muted'>Client</th>
						<th className='text-muted'>Assignments</th>
						<th className='text-muted'>Progress</th>
						<th className='text-muted'> </th>
						<th className='text-muted'>Activity</th>
						<th className='text-muted'>Week</th>
						{/* <th className='text-muted'>Hours</th> */}
					</tr>
				</thead>
				<tbody>{items} </tbody>
			</Table>
		</Card>
	);
}
