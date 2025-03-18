/** @format */
import FeatherIcon from "feather-icons-react";
import React from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";

export default function ProfileInfo({ ...props }) {
	return (
		<Card {...props}>
			<Card.Body>
				<ListGroup className='list-group-flush my-n3'>
					<ListGroup.Item>
						<Row className='align-items-center'>
							<Col>
								<h5 className='mb-0'>Birthday</h5>
							</Col>
							<Col xs='auto'>
								<time className='small text-muted' dateTime='1988-10-24'>
									10/24/82
								</time>
							</Col>
						</Row>
					</ListGroup.Item>
					<ListGroup.Item>
						<Row className='align-items-center'>
							<Col>
								<h5 className='mb-0'>Last Active</h5>
							</Col>
							<Col xs='auto'>
								<time className='small text-muted' dateTime='2018-10-28'>
									<FeatherIcon icon='clock' size='1em' /> 11/14/22 @7:45 EST
								</time>
							</Col>
						</Row>
					</ListGroup.Item>
					<ListGroup.Item>
						<Row className='align-items-center'>
							<Col>
								<h5 className='mb-0'>Session Types</h5>
							</Col>
							<Col xs='auto'>
								<small className='text-muted'>Office & Telehealth</small>
							</Col>
						</Row>
					</ListGroup.Item>
					<ListGroup.Item>
						<Row className='align-items-center'>
							<Col>
								<h5 className='mb-0'>Intake Snapshot</h5>
							</Col>
							<Col xs='auto'>
								<a className='small' href='#!'>
									Biopsychosocial
								</a>
							</Col>
						</Row>
					</ListGroup.Item>
				</ListGroup>
			</Card.Body>
		</Card>
	);
}
