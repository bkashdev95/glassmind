/** @format */

import FeatherIcon from "feather-icons-react";
import React from "react";
import { Badge, Button, ButtonGroup, Col, Nav, Row } from "react-bootstrap";
import { Header } from "../components";

export default function CRMContactsHeader({
	activeTab,
	setActiveTab,
	...props
}) {
	return (
		<Header className='mt-md-3' {...props}>
			<Header.Body>
				<Row className='align-items-center'>
					<Col>
						<Header.Pretitle>My Client List</Header.Pretitle>
						<Header.Title className='text-truncate'>Clients</Header.Title>
					</Col>
					<Col xs='auto'>
						<ButtonGroup className='nav d-inline-flex'>
							<Button
								variant='white'
								active={activeTab === 0}
								onClick={() => setActiveTab(0)}>
								<FeatherIcon icon='list' size='1em' />
							</Button>
							<Button
								variant='white'
								active={activeTab === 1}
								onClick={() => setActiveTab(1)}>
								<FeatherIcon icon='grid' size='1em' />
							</Button>
						</ButtonGroup>
						<Button variant='outline-primary' className='ms-2'>
							Add New Client
						</Button>
					</Col>
				</Row>
				<Row className='align-items-center'>
					<Col>
						<Header.Tabs className='nav-overflow'>
							<Nav.Item>
								<Nav.Link className='text-nowrap' role='button' active>
									All clients{" "}
									<Badge bg='secondary-soft' className='rounded-pill'>
										42
									</Badge>
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className='text-nowrap' role='button'>
									Archived{" "}
									<Badge bg='secondary-soft' className='rounded-pill'>
										18
									</Badge>
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className='text-nowrap' role='button'>
									Transfering{" "}
									<Badge bg='secondary-soft' className='rounded-pill'>
										3
									</Badge>
								</Nav.Link>
							</Nav.Item>
						</Header.Tabs>
					</Col>
				</Row>
			</Header.Body>
		</Header>
	);
}
