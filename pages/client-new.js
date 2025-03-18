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
										<Header.Pretitle>New Client To Practice</Header.Pretitle>
										<Header.Title> 💖 Setup new client intake</Header.Title>
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

							<Header className='mt-md-5'>
								<Header.Body>
									<Row className='align-items-center'>
										<Col>
											<Header.Pretitle>
												Onboarding Forms and Packages
											</Header.Pretitle>
											<Header.Title>Add intake packages</Header.Title>
										</Col>
									</Row>
								</Header.Body>
							</Header>
							<col></col>
							<div className='form-group'>
								<Form.Label>Intake Packages</Form.Label>

								<Select
									options={[
										{
											value: "welcome",
											label: "Welcome Package",
										},
										{
											value: "whattoexpect",
											label: "What to Expect Ahead",
										},
										{
											value: "adult-intake",
											label: "Standard Adult Intake",
										},
										{
											value: "insights-biopsychosocial",
											label: "Insights & Biopsychosocial",
										},
										{
											value: "couples-intake",
											label: "Couples Intake",
										},
										{
											value: "adolescent-caregiver",
											label: "Adolescent & Caregiver",
										},
									]}
									placeholder={null}
									isMulti
								/>
								<Form.Text className='small text-muted'>
									Select the desired packages to include with the client intake
									process.
								</Form.Text>
							</div>
							{/* <Row>
								<Col xs={12} md={6}>
									<div className='form-group'>
										<Form.Label>Start date</Form.Label>
										<Form.Control
											as={Flatpickr}
											className='text-muted'
											options={{ dateFormat: "M j" }}
											type='text'
										/>
									</div>
								</Col>
								<Col xs={12} md={6}>
									<div className='form-group'>
										<Form.Label>End date</Form.Label>
										<Form.Control
											as={Flatpickr}
											className='text-muted'
											options={{ dateFormat: "M j" }}
											type='text'
										/>
									</div>
								</Col>
							</Row>
							<hr className='mt-4 mb-5' />
							<div className='form-group'>
								<Form.Label className='mb-1'>Project cover</Form.Label>
								<Form.Text className='text-muted'>
									Please use an image no larger than 1200px * 600px.
								</Form.Text>
								<Dropzone
									accept='image/*'
									multiple={false}
									onDrop={(acceptedFiles) => console.log(acceptedFiles)}
								/>
							</div>
							<hr className='mt-5 mb-5' />
							<div className='form-group'>
								<Form.Label className='mb-1'>Starting files</Form.Label>
								<Form.Text className='text-muted'>
									Upload any files you want to start the projust with.
								</Form.Text>
								<Card>
									<Card.Body>
										<Dropzone
											multiple
											onDrop={(acceptedFiles) => console.log(acceptedFiles)}
										/>
									</Card.Body>
								</Card>
							</div> */}
							<hr className='mt-5 mb-5' />
							<Row>
								<Col xs={12} md={6}>
									<div className='form-group'>
										<Form.Label className='mb-1'>
											Notify me of client progress during onboarding
										</Form.Label>
										<Form.Text className='text-muted'>
											Use this to maintain closer contact during onboarding and
											reduce drop outs. We'll send you notices as the client
											goes through the onboarding and intake process. You can
											quickly respond, if you choose, and foster support and
											engagement.
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
