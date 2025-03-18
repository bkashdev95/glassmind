/** @format */

import FeatherIcon from "feather-icons-react";
import { Button, Card, Col, Container, Nav, Form, Row } from "react-bootstrap";
import { Header } from "../components";
import { Dropzone, Flatpickr, Select } from "../components/vendor";

export default function CreateNewAssignmentResults() {
	return (
		<div className='main-content'>
			<Container fluid>
				<Row className='justify-content-center'>
					<Col xs={12} lg={10} xl={8}>
						<Header className='mt-md-5'>
							<Header.Body>
								<Row>
									<Col>
										<Header.Pretitle>
											Assignment & Activity Builder
										</Header.Pretitle>
										<Header.Title>📎 Create a new assignment</Header.Title>
									</Col>
								</Row>
								<Row>
									<p>This is where the rich text editor would go.</p>
								</Row>
							</Header.Body>
						</Header>
						{/* //DATA# */}
						<form className='mb-4'>
							<Row>
								<Col xs={12} md={6}>
									{/* //type */}
									<div className='form-group'>
										<Form.Label>Activity this appears under</Form.Label>
										<Select
											options={[
												// {
												// 	value: "custom",
												// 	label: "Custom",
												// },
												{
													value: "intake",
													label: "Intake",
												},
												{
													value: "assessments",
													label: "Assessments",
												},
												{
													value: "skillsbuilding",
													label: "Skills Building",
												},

												{
													value: "insights",
													label: "Insight Gathering",
												},
												{
													value: "journals",
													label: "Journals & Activities",
												},
												{
													value: "checkins",
													label: "Check In",
												},
											]}
											placeholder={null}
											// isMulti
										/>
									</div>
								</Col>
								<Col xs={6} md={6}>
									{/* //title */}
									<div class='form-group'>
										<Form.Label>Assignment title</Form.Label>
										<Form.Control
											type='text'
											maxLength='60'
											placeholder='8-10 words'
										/>
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs={6} md={6}>
									{""}
									<div class='form-group'>
										{/* //shortDesc */}
										<div className='form-group'>
											<Form.Label>Short subtitle</Form.Label>
											<Form.Control
												type='text'
												maxLength='128'
												placeholder='15-20 words'
											/>
										</div>
									</div>
								</Col>
								<Col xs={6} md={6}>
									{""}
									<div class='form-group'>
										{/* //shortDesc */}
										<div className='form-group'>
											<Form.Label>Concise instructions</Form.Label>
											<Form.Control
												type='text'
												maxLength='128'
												placeholder='10-12 words'
											/>
										</div>
									</div>
								</Col>
							</Row>

							<div className='form-group'>
								<Form.Label className='mb-1'>
									Assignment or Instructions
								</Form.Label>
								<Form.Text className='text-muted'>
									This can contain the assignment or instructions to go along
									with material you attach.
								</Form.Text>
								{/* //QUILL# Need QUILL like input here */}
							</div>

							<Card>
								<Card.Header>
									<h4 className='card-header-title'>Rich Text Editor</h4>
									<Nav variant='tabs' className='nav-tabs-sm'>
										<Nav.Item>
											<Nav.Link active>Editor</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link>Preview</Nav.Link>
										</Nav.Item>
									</Nav>
								</Card.Header>
							</Card>

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
							</Row> */}
							<hr className='mt-4 mb-5' />
							<div className='form-group'>
								<Form.Label className='mb-1'>
									Attach worksheets or documents
								</Form.Label>
								<Form.Text className='text-muted'>
									Upload any files you would like to include with this
									assignment (worksheets, workbooks, resources).
								</Form.Text>
								<Card>
									<Card.Body>
										<Dropzone
											multiple
											onDrop={(acceptedFiles) => console.log(acceptedFiles)}
										/>
									</Card.Body>
								</Card>
							</div>
							<hr className='mt-5 mb-5' />
							<div className='form-group'>
								<Form.Label className='mb-1'>
									End of Assignment Questions/Instructions
								</Form.Label>
								{/* //DATA# Implement so safe input from QUILL can be stored - includes images and embedded content. */}

								<Form.Text className='text-muted'>
									Provide the client with instructions or questions to answer
									after they complete the work.
								</Form.Text>
								<Row>
									<Col md={11}>
										<div class='form-group'>
											{/* //PROMPTSCRIPT#  */}
											<div className='form-group'>
												<Form.Control
													id='1'
													className='form-control-rounded'
													type='text'
													size='lg'
													maxLength='128'
													placeholder='{promptScript}'
												/>
											</div>
										</div>
									</Col>
									<Col>
										<Button
											variant='white'
											size='lg'
											className='btn-rounded-circle'>
											<FeatherIcon icon='plus-circle' size='1em' />
										</Button>
									</Col>
								</Row>
								{/* //QUILL# NEED REPLACEMENT FOR QUILL HERE */}
							</div>

							<hr className='mt-5 mb-5' />
							<Row>
								{/* //ADMIN# */}
								<Col xs={12} md={6}>
									<div className='form-group'>
										<Form.Label className='mb-1'>
											Share with Practice
										</Form.Label>
										<Form.Text className='text-muted'>
											Turn this on to add the assignment to the practice
											library. Everyone added under this account will have
											access.
										</Form.Text>
										<Form.Switch />
									</div>
								</Col>
								<Col xs={12} md={6}>
									<Card className='bg-light border'>
										<Card.Body>
											<h4 className='mb-2'>
												<FeatherIcon icon='alert-triangle' size='1em' />{" "}
												Practice library
											</h4>
											<p className='small text-muted mb-0'>
												This assignment will be added to the practice library
												under your account. Admin level access is needed to add
												and remove assignments under the practice library.
											</p>
										</Card.Body>
									</Card>
								</Col>
							</Row>
							<hr className='mt-5 mb-5' />
							<Button className='w-100'>Create Assignment</Button>
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
