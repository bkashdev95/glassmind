/** @format */
import FeatherIcon from "feather-icons-react";

import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { Avatar, Header } from "../components";

export default function ClientHeader({ ...props }) {
	const router = useRouter();

	return (
		<Header className='mt-md-3' {...props}>
			<Header.ImageTop src='/img/covers/cover-1.jpg' alt='...' />
			<Container fluid>
				<Header.Body className='mt-n5 mt-md-n6'>
					<Row className='align-items-end'>
						<Col xs='auto'>
							<Header.AvatarTop status='urgent' size='xxl'>
								<Avatar.Image
									alt='Dianna Smiley'
									src='/img/avatars/profiles/avatar-1.jpg'
									className='rounded-circle border border-4 border-body'
								/>
							</Header.AvatarTop>
						</Col>
						<Col className='mb-3 ms-n3 ms-md-n2'>
							<Header.Pretitle>DOB: 04/22/84</Header.Pretitle>
							<Header.Title>Dianna Smiley</Header.Title>
						</Col>
						{/* //Activate direct chat features */}
						<Col xs={12} md='auto' className='mt-2 mt-md-0 mb-md-3'>
							<Button variant='white' size='sm' href={`#!`} className='ms-1'>
								<FeatherIcon
									icon='corner-down-right'
									size='1.25em'
									className='me-1'
								/>{" "}
								Send Chat to Client
							</Button>
						</Col>
					</Row>
					<Row className='align-items-center'>
						<Col>
							<Header.Tabs className='nav-overflow'>
								<Nav.Item>
									<Link href='/client/dashboard' passHref>
										<Nav.Link active={router.pathname === "/client/dashboard"}>
											Client Dashboard
										</Nav.Link>
									</Link>
								</Nav.Item>
								<Nav.Item>
									<Link href='/client/assignments-current' passHref>
										<Nav.Link
											active={
												router.pathname === "/client/assignments-current"
											}>
											Current Assignments
										</Nav.Link>
									</Link>
								</Nav.Item>
								<Nav.Item>
									<Link href='/client/assignments-completed' passHref>
										<Nav.Link
											active={
												router.pathname === "/client/assignments-completed"
											}>
											Completed & Reviewed
										</Nav.Link>
									</Link>
								</Nav.Item>
								<Nav.Item>
									<Link href='/client-assignments-new' passHref>
										<Nav.Link
											active={router.pathname === "/client-assignments-new"}>
											Give New Assignments
										</Nav.Link>
									</Link>
								</Nav.Item>
								<Nav.Item>
									<Link href='/client-favorites' passHref>
										<Nav.Link active={router.pathname === "/client-favorites"}>
											Favorites
										</Nav.Link>
									</Link>
								</Nav.Item>
								<Nav.Item>
									<Link href='/client-custom-created' passHref>
										<Nav.Link
											active={router.pathname === "/client-custom-created"}>
											Custom Created
										</Nav.Link>
									</Link>
								</Nav.Item>
								<Nav.Item>
									<Link href='/client-activity-calendar' passHref>
										<Nav.Link
											active={router.pathname === "/client-activity-calendar"}>
											Activity Calendar
										</Nav.Link>
									</Link>
								</Nav.Item>
							</Header.Tabs>
						</Col>
					</Row>
				</Header.Body>
			</Container>
		</Header>
	);
}
