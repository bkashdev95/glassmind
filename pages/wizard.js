/** @format */

import FeatherIcon from "feather-icons-react";
import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Nav, Row } from "react-bootstrap";
import { Dropzone, Flatpickr, Select } from "../components/vendor";

export default function Wizard() {
	const [activeStep, setActiveStep] = useState(1);

	const stepOne = (
		<>
			<Row className='justify-content-center'>
				<Col xs={12} md={10} lg={8} xl={6} className='text-center'>
					<h6 className='mb-4 text-uppercase text-muted'>
						Step {activeStep} of 3
					</h6>
					<h1 className='mb-3'>Let’s start with the basics.</h1>
					<p className='mb-5 text-muted'>
						Understanding the type of team you're creating help us to ask all
						the right questions.
					</p>
				</Col>
			</Row>
			<div className='form-group'>
				<Form.Label>Team name</Form.Label>
				<Form.Control type='text' />
			</div>
			<div className='form-group'>
				<Form.Label className='mb-1'>Team description</Form.Label>
				<Form.Text className='text-muted'>
					This is how others will learn about the project, so make it good!
				</Form.Text>
				{/* //QUILL# Need replacement for this: <Quill /> */}
			</div>
			<div className='form-group'>
				<Form.Label>Add team members</Form.Label>
				<Select
					options={[
						{
							imgSrc: "/img/avatars/profiles/avatar-1.jpg",
							label: "Dianna Smiley",
							value: "Dianna Smiley",
						},
						{
							imgSrc: "/img/avatars/profiles/avatar-2.jpg",
							value: "Ab Hadley",
							label: "Ab Hadley",
						},
						{
							imgSrc: "/img/avatars/profiles/avatar-3.jpg",
							value: "Adolfo Hess",
							label: "Adolfo Hess",
						},
						{
							imgSrc: "/img/avatars/profiles/avatar-4.jpg",
							value: "Daniela Dewitt",
							label: "Daniela Dewitt",
						},
					]}
					placeholder={null}
				/>
			</div>
			<hr className='my-5' />
			<Nav className='row align-items-center'>
				<Col xs='auto'>
					<Button variant='white' size='lg'>
						Cancel
					</Button>
				</Col>
				<Col className='text-center'>
					<h6 className='text-uppercase text-muted mb-0'>
						Step {activeStep} of 3
					</h6>
				</Col>
				<Col xs='auto'>
					<Button size='lg' onClick={() => setActiveStep(activeStep + 1)}>
						Continue
					</Button>
				</Col>
			</Nav>
		</>
	);
	const stepTwo = (
		<>
			<Row className='justify-content-center'>
				<Col xs={12} md={10} lg={8} xl={6} className='text-center'>
					<h6 className='mb-4 text-uppercase text-muted'>
						Step {activeStep} of 3
					</h6>
					<h1 className='mb-3'>Next, let’s upload some files.</h1>
					<p className='mb-5 text-muted'>
						We need to style your team page and make sure you have all your
						starting files.
					</p>
				</Col>
			</Row>
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
			<hr className='my-5' />
			<Nav className='row align-items-center'>
				<Col xs='auto'>
					<Button
						variant='white'
						size='lg'
						onClick={() => setActiveStep(activeStep - 1)}>
						Back
					</Button>
				</Col>
				<Col className='text-center'>
					<h6 className='text-uppercase text-muted mb-0'>
						Step {activeStep} of 3
					</h6>
				</Col>
				<Col xs='auto'>
					<Button size='lg' onClick={(e) => setActiveStep(activeStep + 1)}>
						Continue
					</Button>
				</Col>
			</Nav>
		</>
	);

	const stepThree = (
		<>
			<Row className='justify-content-center'>
				<Col xs={12} md={10} lg={8} xl={6} className='text-center'>
					<h6 className='mb-4 text-uppercase text-muted'>
						Step {activeStep} of 3
					</h6>
					<h1 className='mb-3'>Let’s get some last details.</h1>
					<p className='mb-5 text-muted'>
						Setting up tags, dates, and permissions makes sure to keep your team
						organized and safe.
					</p>
				</Col>
			</Row>
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
			<hr className='mt-5 mb-5' />
			<Row>
				<Col xs={12} md={6}>
					<div className='form-group'>
						<Form.Label className='mb-1'>Private project</Form.Label>
						<Form.Text className='text-muted'>
							If you are available for hire outside of the current situation,
							you can encourage others to hire you.
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
								Once a project is made private, you cannot revert it to a public
								project.
							</p>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<hr className='my-5' />
			<Nav className='row align-items-center'>
				<Col xs='auto'>
					<Button
						variant='white'
						size='lg'
						onClick={() => setActiveStep(activeStep - 1)}>
						Back
					</Button>
				</Col>
				<Col className='text-center'>
					<h6 className='text-uppercase text-muted mb-0'>
						Step {activeStep} of 3
					</h6>
				</Col>
				<Col xs='auto'>
					<Button size='lg'>Create</Button>
				</Col>
			</Nav>
		</>
	);

	return (
		<div className='main-content'>
			<Container fluid='lg'>
				<Row className='justify-content-center'>
					<Col xs={12} lg={10} xl={8} className='py-6'>
						{activeStep === 1 && stepOne}
						{activeStep === 2 && stepTwo}
						{activeStep === 3 && stepThree}
					</Col>
				</Row>
			</Container>
		</div>
	);
}
