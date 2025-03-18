/** @format */

import FeatherIcon from "feather-icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Badge, Button, ButtonGroup, Col, Nav, Row } from "react-bootstrap";
import { Header } from "../components";

export default function AssignmentHeader({
	activeTab,
	setActiveTab,
	...props
}) {
	const router = useRouter();

	return (
		<Header className='mt-md-3' {...props}>
			<Header.Body>
				<Row className='align-items-center'>
					<Col>
						<Header.Pretitle>Review and send</Header.Pretitle>
						<Header.Title>Explore Assignments</Header.Title>
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
							Create A Custom Assignment
						</Button>
					</Col>
				</Row>
				<Row className='align-items-center'>
					<Col>
						<Header.Tabs className='nav-overflow'>
							<Nav.Item>
								<Link href='/assignment-skills-building' passHref>
									<Nav.Link
										active={router.pathname === "/assignment-skills-building"}>
										Skills Building
									</Nav.Link>
								</Link>
							</Nav.Item>
							<Nav.Item>
								<Link href='/assignment-insight-gathering' passHref>
									<Nav.Link
										active={
											router.pathname === "/assignment-insight-gathering"
										}>
										Insight Gathering
									</Nav.Link>
								</Link>
							</Nav.Item>
							<Nav.Item>
								<Link href='/assignment-journals-activities' passHref>
									<Nav.Link
										active={
											router.pathname === "/assignment-journals-activities"
										}>
										Journals & Activities
									</Nav.Link>
								</Link>
							</Nav.Item>
							<Nav.Item>
								<Link href='/assignment-virtualized-support' passHref>
									<Nav.Link
										active={
											router.pathname === "/assignment-virtualized-support"
										}>
										Virtualized Support
									</Nav.Link>
								</Link>
							</Nav.Item>
							<Nav.Item>
								<Link href='/assignment-assessment' passHref>
									<Nav.Link
										active={router.pathname === "/assignment-assessment"}>
										Assessments
									</Nav.Link>
								</Link>
							</Nav.Item>
							<Nav.Item>
								<Link href='/account-notifications' passHref>
									<Nav.Link
										active={router.pathname === "/account-notifications"}>
										Intake
									</Nav.Link>
								</Link>
							</Nav.Item>
						</Header.Tabs>
					</Col>
				</Row>
			</Header.Body>
		</Header>
	);
}
