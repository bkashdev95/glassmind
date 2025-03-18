/** @format */

import FeatherIcon from "feather-icons-react";
import Link from "next/link";
import React from "react";
import {
	Badge,
	Button,
	Card,
	Col,
	Dropdown,
	Form,
	ListGroup,
	OverlayTrigger,
	Row,
	Tooltip,
} from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";
import { Avatar, Comment } from "../components";

export default function ClientGoals({ ...props }) {
	const data = [
		{
			id: "1",
			icon: "alert-circle",
			title: "Check In | Strong Emotions",
			subtitle: "Virtualized support for experiencing strong emotions.",
			action: "View Check In",
			status: "urgent",
			time: "11:42 PM",
			date: "11-19-22",
		},
		{
			id: "2",
			icon: "help-circle",
			title: "Family Dynamics",
			subtitle: "Let's explore your family history.",
			action: "Completed | Ready for Review",
			status: "online",
			time: "11:42 PM",
			date: "11-18-22",
		},
		{
			id: "3",
			icon: "activity",
			title: "GAD-7 Assessement",
			subtitle: "Please complete the following assessment.",
			action: "View Assignment",
			status: "",
			time: "11:42 PM",
			date: "11-18-22",
		},
		{
			id: "4",
			icon: "help-circle",
			title: "Follow up: GAD-7",
			subtitle: "Share more insights on your answers.",
			action: "View Assignment",
			status: "",
			time: "11:42 PM",
			date: "11-18-22",
		},
	];

	return (
		<Card {...props}>
			<Card.Body>
				<div className='mb-4'>
					<Row className='align-items-center'>
						<Col xs='12' md='auto' className='mt-3 mt-md-0'>
							<Avatar.Group>
								<a>
									<Avatar size='lg' status='urgent'>
										<OverlayTrigger overlay={<Tooltip>Dianna Smiley</Tooltip>}>
											<Avatar.Image
												src='/img/avatars/profiles/avatar-1.jpg'
												alt='Dianna Smiley'
												className='rounded-circle'
											/>
										</OverlayTrigger>
									</Avatar>
								</a>
							</Avatar.Group>
						</Col>
						<Col className='ms-n1'>
							<h4 className='mb-1'>Check In | Strong Emotions</h4>
							<Card.Text className='small text-muted'>
								<FeatherIcon icon='clock' size='1em' />{" "}
								<time dateTime='2018-05-24'>11-18-22</time>
							</Card.Text>
						</Col>
						<Col xs='auto'>
							<Dropdown align='end'>
								<Dropdown.Toggle
									as='span'
									className='dropdown-ellipses'
									role='button'>
									<FeatherIcon icon='more-vertical' size='25' />
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item href='#!'>Respond to Client</Dropdown.Item>
									<Dropdown.Item href='#!'>Collapse/Expand</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Col>
					</Row>
				</div>
				<p className='mb-3'>
					Share with me the most important goals we can work on together while
					you're in therapy.
				</p>
				<ol className='mb-3'>
					<li>
						<strong>
							What's your most important goal you want to achieve with therapy?
						</strong>
						{"  "}I'm not happy with my life. I don't feel like I used to a few
						years ago and I need to get recentered on what's important.
					</li>
					<li>
						<strong>What does meeting this goal look like?</strong>
						{"  "}I would feel more positive about where I am in my career and
						relationships.
					</li>
					<li>
						<strong>What are the obstacles in your way?</strong>
						{"  "}I don't have the time I used to have. There are so many
						conflicting commitments I have in my schedule. I don't know where to
						start prioritizing things to get what I want!
					</li>
					<li>
						<strong>
							What support do you have to help you meet this goal?
						</strong>
						{"  "}I have a lot of support from family and friends. Most want to
						help and I've shared with them some of my struggles.
					</li>
				</ol>
				{/* <p className='mb-4'>
					Insight Tags:{" "}
					<Badge as='a' bg='primary-soft' href='#!'>
						treatment goals
					</Badge>{" "}
					<Badge as='a' bg='primary-soft' href='#!'>
						support
					</Badge>
				</p> */}
				<div className='mb-3'>
					<Row>
						{/* <Col>
							<Button variant='white' size='sm' className='ms-1'>
								Send Support Emoji
							</Button>
							<Button variant='white' size='sm' className='ms-1'>
								👍
							</Button>
						</Col> */}

						{/* <Col xs='auto'>
							<Button variant='white' size='sm'>
								Respond
							</Button>
						</Col> */}
					</Row>
				</div>
				<hr />
				<Comment className='mb-3'>
					<Row>
						<Col xs='auto'>
							<Link href='#!' passHref>
								<Avatar as='a'>
									<Avatar.Image
										src='/img/avatars/profiles/avatar-5.jpg'
										className='rounded-circle'
										alt='Miyah Miles'
									/>
								</Avatar>
							</Link>
						</Col>
						<Col className='ms-n2'>
							<Comment.Body>
								<Row>
									<Col>
										<Comment.Title>Molly Jennings, Ph.D</Comment.Title>
									</Col>
									<Col xs='auto'>
										<Comment.Time>11-13-22 @ 11:12 am</Comment.Time>
									</Col>
								</Row>
								<Comment.Text>
									Thank you for sharing this check in with me Dianna. Let's talk
									about this in session on Friday.
								</Comment.Text>
							</Comment.Body>
						</Col>
					</Row>
				</Comment>
				<Comment className='mb-3'>
					<Row>
						<Col xs='auto'>
							<Link href='#!' passHref>
								<Avatar as='a'>
									<Avatar.Image
										src='/img/avatars/profiles/avatar-1.jpg'
										className='rounded-circle'
										alt='Molly Jennings, Ph.D'
									/>
								</Avatar>
							</Link>
						</Col>
						<Col className='ms-n2'>
							<Comment.Body>
								<Row>
									<Col>
										<Comment.Title>Dianna Smiley</Comment.Title>
									</Col>
									<Col xs='auto'>
										<Comment.Time>11-13-22 @ 02:38 pm</Comment.Time>
									</Col>
								</Row>
								<Comment.Text>
									I appreciate that Molly. It was hard dealing with this.
								</Comment.Text>
							</Comment.Body>
						</Col>
					</Row>
				</Comment>
				<hr />
				<Row>
					<Col xs='auto'>
						<Avatar size='sm'>
							<Avatar.Image
								src='/img/avatars/profiles/avatar-5.jpg'
								className='rounded-circle'
								alt='...'
							/>
						</Avatar>
					</Col>
					<Col className='ms-n2 align-self-center'>
						<form>
							<Form.Label className='visually-hidden'></Form.Label>
							<Form.Control
								as={TextareaAutosize}
								className='form-control-flush form-control-auto'
								placeholder='Start a chat thread about this assignment ...'
							/>{" "}
						</form>
					</Col>

					{/* //Extras for V1 - attachments to chat thread */}

					<Col xs='auto' className='align-self-end'>
						<div className='text-muted mb-2'>
							{/* <OverlayTrigger overlay={<Tooltip>Send Emoji</Tooltip>}>
								<FeatherIcon icon='heart' size='1em' className='me-3' />
							</OverlayTrigger> */}
							{/* <OverlayTrigger overlay={<Tooltip>Attach file</Tooltip>}>
								<FeatherIcon icon='paperclip' size='1em' className='me-3' />
							</OverlayTrigger> */}

							<Button variant='white' size='sm' href={`#!`} className='ms-1'>
								<FeatherIcon icon='heart' size='1.25em' className='me-1' />{" "}
								Emoji
							</Button>

							<Button variant='white' size='sm' href={`#!`} className='ms-1'>
								<FeatherIcon
									icon='corner-down-right'
									size='1.25em'
									className='me-1'
								/>{" "}
								Send to Client
							</Button>
						</div>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
}
