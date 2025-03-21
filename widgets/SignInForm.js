/** @format */

import FeatherIcon from "feather-icons-react";
import Link from "next/link";
import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

export default function SignInForm() {
	return (
		<>
			<h1 className='display-4 text-center mb-3'>Sign in</h1>
			<p className='text-muted text-center mb-5'>Welcome back 💖.</p>
			<form>
				<div className='form-group'>
					<Form.Label>Email Address</Form.Label>
					<Form.Control type='email' placeholder='name@address.com' />
				</div>
				<div className='form-group'>
					<Row>
						<Col>
							<Form.Label>Password</Form.Label>
						</Col>
						<Col xs='auto'>
							<Link href='/password-reset' passHref>
								<Form.Text as='a' className='small text-muted'>
									Forgot password?
								</Form.Text>
							</Link>
						</Col>
					</Row>
					<InputGroup className='input-group-merge'>
						<Form.Control type='password' placeholder='Enter your password' />
						<InputGroup.Text>
							<FeatherIcon icon='eye' size='1em' />
						</InputGroup.Text>
					</InputGroup>
				</div>
				<Button size='lg' className='w-100 mb-3'>
					Sign in
				</Button>
				{/* //LIVE# */}
				{/* <p className='text-center'>
					<small className='text-muted text-center'>
						Don't have an account yet?{" "}
						<Link href='/sign-up'>
							<a>Sign up</a>
						</Link>
						.
					</small>
				</p> */}
			</form>
		</>
	);
}
