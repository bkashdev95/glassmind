/** @format */
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Avatar, Header } from "../components";
import { ModalMembers } from "../modals";

export default function ProjectHeader({ ...props }) {
	const [modalVisible, setModalVisible] = useState(false);
	const router = useRouter();

	return (
		<>
			<Card>
				<Card.Body>
					<Row className='align-items-center'>
						<Col>
							<span className='h2 mb-0'>Intake and Nurturing</span>
							<p className='small mt-1'>
								Build early connections with clients. Choose from these
								activities.
							</p>
						</Col>
						<Col xs='auto'>
							<Avatar.Group className='me-1'>
								<Avatar>
									<Avatar.Image
										className='rounded-circle'
										src='/img/avatars/profiles/avatar-1.jpg'
										alt='Dianna Smiley'
									/>
								</Avatar>
								<Avatar>
									<Avatar.Image
										className='rounded-circle'
										src='/img/avatars/profiles/avatar-2.jpg'
										alt='Paul Allen'
									/>
								</Avatar>
								<Avatar>
									<Avatar.Image
										className='rounded-circle'
										src='/img/avatars/profiles/avatar-3.jpg'
										alt='Gregg Stanley'
									/>
								</Avatar>
								<Avatar>
									<Avatar.Title className='rounded-circle'>MB</Avatar.Title>
								</Avatar>
							</Avatar.Group>
						</Col>
					</Row>
					{/* <Avatar.Group className='me-1'>
						<Avatar size='lg'>
							<Avatar.Image
								className='rounded-circle'
								src='/img/avatars/profiles/avatar-1.jpg'
								alt='Dianna Smiley'
							/>
						</Avatar>
						<Avatar size='lg'>
							<Avatar.Image
								className='rounded-circle'
								src='/img/avatars/profiles/avatar-1.jpg'
								alt='Dianna Smiley'
							/>
						</Avatar>
						<Avatar size='lg'>
							<Avatar.Image
								className='rounded-circle'
								src='/img/avatars/profiles/avatar-1.jpg'
								alt='Dianna Smiley'
							/>
						</Avatar>
						<Avatar size='lg'>
							<Avatar.Title className='rounded-circle'>CF</Avatar.Title>
						</Avatar>
					</Avatar.Group> */}
				</Card.Body>
				{/* <Card.Footer className='bg-dark'>
					<Highlight language='html' className='bg-dark mb-0'>
						&lt;Avatar.Group&gt;
						<br />
						&nbsp;&nbsp;&lt;Avatar&gt;
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&lt;Avatar.Image
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className=&quot;rounded-circle&quot;
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src=&quot;/img/avatars/profiles/avatar-1.jpg&quot;
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alt=&quot;Dianna&nbsp;Smiley&quot;
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
						<br />
						&nbsp;&nbsp;&lt;/Avatar&gt;
						<br />
						&nbsp;&nbsp;&lt;Avatar&gt;
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&lt;Avatar.Image
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className=&quot;rounded-circle&quot;
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src=&quot;/img/avatars/profiles/avatar-1.jpg&quot;
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alt=&quot;Dianna&nbsp;Smiley&quot;
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
						<br />
						&nbsp;&nbsp;&lt;/Avatar&gt;
						<br />
						&nbsp;&nbsp;&lt;Avatar&gt;
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&lt;Avatar.Image
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className=&quot;rounded-circle&quot;
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src=&quot;/img/avatars/profiles/avatar-1.jpg&quot;
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alt=&quot;Dianna&nbsp;Smiley&quot;
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
						<br />
						&nbsp;&nbsp;&lt;/Avatar&gt;
						<br />
						&nbsp;&nbsp;&lt;Avatar&gt;
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&lt;Avatar.Title&nbsp;className=&quot;rounded-circle&quot;&gt;CF&lt;/Avatar.Title&gt;
						<br />
						&nbsp;&nbsp;&lt;/Avatar&gt;
						<br />
						&lt;/Avatar.Group&gt;
					</Highlight>
				</Card.Footer> */}
			</Card>
		</>
	);
}
