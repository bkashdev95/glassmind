/** @format */

import { Col, Container, Row } from "react-bootstrap";
import { ClientHeader } from "../widgets";
import ClientDashboardClientEngagement from "../widgets/ClientDashboardClientEngagement";
import ClientAssignmentView from "../widgets/ClientAssignmentView";

export default function ClientDashboard() {
	return (
		<div className='main-content'>
			<ClientHeader />
			<Container fluid>
				<Row className='row'>
					<Col xs={12} xl={4}>
						<ClientDashboardClientEngagement />
						{/* <ProfileInfo /> */}
						{/* <ClientGoals /> */}
					</Col>
					<Col xs={12} xl={8}>
						<ClientAssignmentView />
					</Col>
				</Row>
			</Container>
		</div>
	);
}
