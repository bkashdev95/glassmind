/** @format */

import { Col, Container, Row } from "react-bootstrap";
import { ClientHeader } from "/widgets";
import ClientAssignmentSkillsBuilding from "/widgets/ClientAssignmentSkillsBuilding";
import ClientAssignmentCustom from "../widgets/ClientAssignmentCustom";
import ClientAssignmentJournals from "../widgets/ClientAssignmentJournals";
import ClientAssignmentInsightGathering from "/widgets/ClientAssignmentInsightGathering";

export default function ClientDetails() {
	return (
		<div className='main-content'>
			<ClientHeader />
			<Container fluid>
				<Row className='row'>
					<Col xl={6} xs={6}>
						<ClientAssignmentSkillsBuilding />
						<ClientAssignmentJournals />
					</Col>
					<Col xl={6} xs={6}>
						<ClientAssignmentCustom />
						<ClientAssignmentInsightGathering />
					</Col>
				</Row>
			</Container>
		</div>
	);
}
