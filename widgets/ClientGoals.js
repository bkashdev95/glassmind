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
	OverlayTrigger,
	Row,
	Tooltip,
} from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";
import { Avatar, Comment } from "../components";

export default function ClientGoals({ ...props }) {
	return (
		<Card {...props}>
			<Card.Body>
				<div className='mb-4'>
					<Row className='align-items-center'>
						<Col xs='auto'>
							<Avatar>
								<Avatar.Image
									src='/img/avatars/profiles/avatar-1.jpg'
									className='rounded-circle'
									alt='...'
								/>
							</Avatar>
						</Col>
						<Col className='ms-n2'>
							<h4 className='mb-1'>Client Goals for Therapy</h4>
							<Card.Text className='small text-muted'>
								<FeatherIcon icon='clock' size='1em' />{" "}
								<time dateTime='2018-05-24'>11-12-22</time>
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
									<Dropdown.Item href='#!'>Unpin from Dashboard</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Col>
					</Row>
				</div>
				<p className='mb-4'>
					Share with me the most important goals we can work on together while
					you're in therapy.
				</p>
				<ul className='mb-3'>
					<li>
						<strong>Most important goal</strong>: I'm not happy with my life. I
						don't feel like I used to a few years ago and I need to get
						recentered on what's important.
					</li>
					<li>
						<strong>What does meeting this goal look like?</strong> I would feel
						more positive about where I am in my career and relationships.
					</li>
					<li>
						<strong>What are the obstacles in your way?</strong> I don't have
						the time I used to have. There are so many conflicting commitments I
						have in my schedule. I don't know where to start prioritizing things
						to get what I want!
					</li>
					<li>
						<strong>
							What support do you have to help you meet this goal?
						</strong>{" "}
						I have a lot of support from family and friends. Most want to help
						and I've shared with them some of my struggles.
					</li>
				</ul>
			</Card.Body>
		</Card>
	);
}
