/** @format */

import { Col, Container, Row } from "react-bootstrap";
import {
	DashboardCreateNewClient,
	DashboardCreateNewAssignment,
	DashboardHeader,
	DashboardNurturing,
	DashboardCheckins,
} from "../widgets";

import ClientDashboardClientEngagement from "../widgets/DashboardClientEngagement";

export default function TherapistDashboard() {
	return (
		<div className='main-content'>
			<DashboardHeader />
			<Container fluid>
				<Row>
					<Col xs={12} xl={8}>
						<DashboardNurturing />
						<ClientDashboardClientEngagement />
					</Col>
					<Col xs={12} xl={4}>
						<DashboardCheckins />
						<DashboardCreateNewClient />
						<DashboardCreateNewAssignment />
					</Col>
				</Row>
			</Container>
		</div>
	);
}
