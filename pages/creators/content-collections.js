/** @format */

import FeatherIcon from "feather-icons-react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "../../components";
import { Dropzone, Flatpickr, Select } from "../../components/vendor";

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
										<Header.Title>Create a new assignment</Header.Title>
									</Col>
								</Row>
							</Header.Body>
						</Header>
						{/* //DATA# */}
						<form className='mb-4'>
							<Row>
								<Col xs={6} md={6}>
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
											placeholder='10-12 words'
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
							<Row>
								<Col xs={6} md={6}>
									{/* //type */}
									<div className='form-group'>
										<Form.Label>Time to complete</Form.Label>
										<Select
											options={[
												// {
												// 	value: "custom",
												// 	label: "Custom",
												// },
												{
													value: "1",
													label: "1 Minute",
												},
												{
													value: "2",
													label: "2 Minutes",
												},
												{
													value: "3",
													label: "3 Minutes",
												},
												{
													value: "4",
													label: "4 Minutes",
												},
												{
													value: "5",
													label: "5 Minutes",
												},
												{
													value: "6",
													label: "6 Minutes",
												},
												{
													value: "7",
													label: "7 Minutes",
												},
												{
													value: "10",
													label: "10 Minutes",
												},
												{
													value: "15",
													label: "15 Minutes",
												},
												{
													value: "20",
													label: "20 Minutes",
												},
												{
													value: "30",
													label: "30 Minutes",
												},
												{
													value: "45",
													label: "45 Minutes",
												},
												{
													value: "60",
													label: "60 Minutes",
												},
												{
													value: "90",
													label: "90 Minutes",
												},
												{
													value: "120",
													label: "120 Minutes",
												},
											]}
											placeholder={null}
											// isMulti
										/>
									</div>
								</Col>
								<Col xs={6} md={6}>
									{/* //type */}
									<div className='form-group'>
										<Form.Label>Add to Collection</Form.Label>
										<Select
											options={[
												// {
												// 	value: "custom",
												// 	label: "Custom",
												// },
												{
													value: "collection_id",
													label: "Mindfulness 101",
												},
												{
													value: "collection_id",
													label: "Mindfulness 102",
												},
												{
													value: "collection_id",
													label: "Mindfulness 103",
												},

												{
													value: "collection_id",
													label: "Mindfulness 104",
												},
												{
													value: "collection_id",
													label: "Medication Update",
												},
												{
													value: "collection_id",
													label: "Check In | Strong Emotion",
												},
											]}
											placeholder={null}
											// isMulti
										/>
									</div>
								</Col>
							</Row>
							<Header className='mt-md-0'>
								<Header.Body>
									<Row>
										<Col>
											<Header.Title className='mt-md-0'>
												Prompt Designer
											</Header.Title>
											<a className='small text-muted'>
												Use promptScript to synthesize the assignment.
											</a>
										</Col>
									</Row>
								</Header.Body>
							</Header>
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
							{/* //BREAK - starts new prompt  */}
							<Row>
								{""}
								<Col md='6'>
									<hr className='mt-3 mb-5' />
								</Col>
								<Col>
									<Button
										size='sm'
										variant='white'
										className='btn-rounded-circle'>
										<FeatherIcon icon='plus-circle' size='1em' />
									</Button>
								</Col>
							</Row>

							<Row>
								<Col md={11}>
									<div class='form-group'>
										{/* //PROMPTSCRIPT# */}
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

							<Row>
								{""}
								<Col md='6'>
									<hr className='mt-3 mb-5' />
								</Col>
								<Col>
									<Button
										size='sm'
										variant='white'
										className='btn-rounded-circle'>
										<FeatherIcon icon='plus-circle' size='1em' />
									</Button>
								</Col>
							</Row>
							<div className='form-group'>
								<Form.Label className='mb-1'>
									Attach worksheets or documents
								</Form.Label>
								<Form.Text className='text-muted'>
									Upload files to include with this assignment (worksheets,
									workbooks, resources).
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
								{/* //QUILL# NEED REPLACEMENT FOR QUILL HERE */}
							</div>
							<hr className='mt-5 mb-5' />
							<div className='form-group'>
								{/* //DATA# Hook up a working system - ensure files are securely stored based on user settings - admin/content creator can publish to practice library. */}

								<Form.Label className='mb-1'>Cover visual</Form.Label>
								<Form.Text className='text-muted'>
									This is optional and decorative. Square visuals with a simple
									subject in the center work best.
								</Form.Text>

								{/* //DATA# Hook up a working system - ensure files are securely stored based on user settings - admin/content creator can publish to practice library. */}
								<Dropzone
									accept='image/*'
									multiple={false}
									onDrop={(acceptedFiles) => console.log(acceptedFiles)}
								/>
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
											<a className='small text-muted mb-0'>
												This assignment will be added to the practice library
												under your account. Admin level access is needed to add
												and remove assignments under the practice library.
											</a>
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
