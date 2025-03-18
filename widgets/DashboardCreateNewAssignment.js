/** @format */

import FeatherIcon from "feather-icons-react";
import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";

export default function DashboardCreateNewClient({ ...props }) {
	return (
		<Card {...props}>
			<Card.Body>
				<Row className='align-items-center'>
					<Col>
						<h6 className='text-uppercase text-muted mb-2'>
							Send Clients Assignments
						</h6>
						<span className='h2 mb-0'>Assign Homework</span>
					</Col>
					<Col>
						<Button
							href={"/assignment-skills-building"}
							variant='outline-primary'>
							Send Assignments
						</Button>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
}
