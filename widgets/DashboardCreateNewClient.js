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
							Welcome New Client
						</h6>
						<span className='h2 mb-0'>Onboard New Client</span>
					</Col>
					<Col>
						<Button href={"/client-new"} variant='outline-primary'>
							New Client Intake
						</Button>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
}
