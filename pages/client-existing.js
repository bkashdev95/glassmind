/** @format */

import FeatherIcon from "feather-icons-react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "../components";
import { Flatpickr, Select } from "../components/vendor";
import NumberFormat from "react-number-format";

export default function ProfilePosts() {
	return (
		<div className='main-content'>
			<Container fluid>
				<Row className='justify-content-center'>
					<Col xs={12} lg={10} xl={8}>
						<Header className='mt-md-5'>
							<Header.Body>
								<Row className='align-items-center'>
									<Col>
										<Header.Pretitle>Onboard existing clients</Header.Pretitle>
										<Header.Title>
											{" "}
											Send Glassmind to an existing client
										</Header.Title>
									</Col>
								</Row>
							</Header.Body>
						</Header>
						<form className='mb-4'>
							{/* <Col xs={12} md={6}>
								<div className='form-group'>
									<Form.Label>First name</Form.Label>
									<Form.Control type='text' />
								</div>
								<div className='form-group'>
									<Form.Label>Last name</Form.Label>
									<Form.Control type='text' />
								</div>
							</Col> */}

							<Row>
								<Col xs={12} md={6}>
									<div>
										<div className='form-group'>
											<Form.Label>First name</Form.Label>
											<Form.Control type='text' />
										</div>
									</div>

									<div>
										<div className='form-group'>
											<Form.Label>Last name</Form.Label>
											<Form.Control type='text' />
										</div>
									</div>

									<div>
										{/* <div className='form-group'>
											<Form.Label>Cell #</Form.Label>
											<Form.Control type='text' />
										</div> */}
										<div className='form-group'>
											<Form.Label>Phone</Form.Label>
											<Form.Control
												as={NumberFormat}
												format='(###)###-####'
												mask='_'
												placeholder='(___)___-____'
												type='text'
											/>
										</div>
									</div>
								</Col>
								<Col xs={12} md={6}>
									<div>
										<div className='form-group'>
											<Form.Label>Birthdate</Form.Label>
											<Form.Control type='text' />
										</div>
									</div>

									<div className='form-group'>
										<Form.Label>Date of Intake</Form.Label>
										<Form.Control
											as={Flatpickr}
											className='text-muted'
											options={{ dateFormat: "M j" }}
											type='text'
										/>
									</div>

									<div>
										<div className='form-group'>
											<Form.Label>Email @</Form.Label>
											<Form.Control placeholder='name@email.com' type='email' />
										</div>
									</div>
								</Col>
							</Row>

							<hr className='mt-5 mb-5' />
							<Row>
								<Col xs={12} md={6}>
									<div className='form-group'>
										<Form.Label className='mb-1'>
											Notify me once the client has started
										</Form.Label>
										<Form.Text className='text-muted'>
											We notify you once the client has started using the
											platform.
										</Form.Text>
										<Form.Switch />
									</div>
								</Col>
								<Col xs={12} md={6}>
									<Card className='bg-light border'>
										<Card.Body>
											<h4 className='mb-4'>
												<FeatherIcon icon='check-circle' size='2em' />{" "}
												Onboarding Steps
											</h4>
											<p className='small mb-3'>
												The client receives a text/email welcome message with
												onboarding instructions. They can download the client
												APP (iOS/Android) or login using a web browser.
											</p>
										</Card.Body>
									</Card>
								</Col>
							</Row>
							<hr className='mt-5 mb-5' />
							<Button className='w-100'>Onboard New Client</Button>
							<Button variant='link' className='w-100 text-muted'>
								Cancel
							</Button>
						</form>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
