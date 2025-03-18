/** @format */

import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { DashboardHeader } from "../../widgets";

export default function BillingReportsResults() {
	return (
		<div className='main-content'>
			<DashboardHeader />
			{/* //DATA# */}
			<Container fluid>
				<Row>
					<Col xs={12}>
						<Card className='card-inactive'>
							<Card.Body className='text-center'>
								<img
									className='img-fluid'
									src='/img/illustrations/billing-report.svg'
									style={{ maxWidth: 182 }}
									alt='...'
								/>
								<h1>No billable reports pending.</h1>
								<p className='text-muted'>
									When billable reports are pending, they will appear here to be
									printed.
								</p>
								{/* <Button>Back to Dashboard</Button> */}
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
