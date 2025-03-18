/** @format */

import { Col, Container, Row, Button } from "react-bootstrap";
import { AccountCurrentPlan, AccountHeader } from "../../widgets";

export default function AccountBilling() {
	return (
		<div className='main-content'>
			<Container fluid>
				<Row className='justify-content-center'>
					<Col xs={12} lg={10} xl={8}>
						<AccountHeader />

						<Row>
							<Col xs={12} md={6}>
								<AccountCurrentPlan />
							</Col>
						</Row>

						{/* <AccountInvoices /> */}
						<hr className='mt-4 mb-5' />
						<Row className='justify-content-between'>
							<Col xs={12} md={6} className='col-12 col-md-6'>
								<h4>Delete My Account</h4>
								<p className='small text-muted mb-md-0'>
									To close your account, please complete a simple record
									transfer process to comply with HIPPA record retention
									policies.
								</p>
							</Col>
							<Col xs='auto'>
								<Button variant='outline-danger'>
									Transfer Client Records and Close My Account
								</Button>
							</Col>
						</Row>
						<br />
					</Col>
				</Row>
			</Container>
		</div>
	);
}
