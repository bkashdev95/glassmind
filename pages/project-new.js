/** @format */

import FeatherIcon from "feather-icons-react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "../components";
import { Dropzone, Flatpickr, Select } from "../components/vendor";

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
										<Header.Pretitle>New project</Header.Pretitle>
										<Header.Title>Create a new project</Header.Title>
									</Col>
								</Row>
							</Header.Body>
						</Header>
						<form className='mb-4'>
							<div className='form-group'>
								<Form.Label>Project name</Form.Label>
								<Form.Control type='text' />
							</div>
							<div className='form-group'>
								<Form.Label className='mb-1'>Project description</Form.Label>
								<Form.Text className='text-muted'>
									This is how others will learn about the project, so make it
									good!
								</Form.Text>
								{/* //QUILL# Need replacement for quill <Quill /> rich-text entry here */}
							</div>
							<div className='form-group'>
								<Form.Label>Project tags</Form.Label>
								<Select
									options={[
										{
											value: "css",
											label: "CSS",
										},
										{
											value: "html",
											label: "HTML",
										},
										{
											value: "javascript",
											label: "JavaScript",
										},
										{
											value: "bootstrap",
											label: "Bootstrap",
										},
									]}
									placeholder={null}
									isMulti
								/>
							</div>
							<Row>
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
							</div>
							<hr className='mt-5 mb-5' />
							<Row>
								<Col xs={12} md={6}>
									<div className='form-group'>
										<Form.Label className='mb-1'>Private project</Form.Label>
										<Form.Text className='text-muted'>
											If you are available for hire outside of the current
											situation, you can encourage others to hire you.
										</Form.Text>
										<Form.Switch />
									</div>
								</Col>
								<Col xs={12} md={6}>
									<Card className='bg-light border'>
										<Card.Body>
											<h4 className='mb-2'>
												<FeatherIcon icon='alert-triangle' size='1em' /> Warning
											</h4>
											<p className='small text-muted mb-0'>
												Once a project is made private, you cannot revert it to
												a public project.
											</p>
										</Card.Body>
									</Card>
								</Col>
							</Row>
							<hr className='mt-5 mb-5' />
							<Button className='w-100'>Create project</Button>
							<Button variant='link' className='w-100 text-muted'>
								Cancel this project
							</Button>
						</form>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
