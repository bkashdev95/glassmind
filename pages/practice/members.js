/** @format */

import { Col, Container, Row } from "react-bootstrap";
import {
	AccountDefaultRole,
	AccountHeader,
	AccountMembersList,
	AccountSeatsUsed,
} from "../../widgets";

export default function AccountMembers() {
	return (
		<div className='main-content'>
			<Container fluid>
				<Row className='justify-content-center'>
					<Col xs={12} lg={10} xl={8}>
						<AccountHeader />
						<Row>
							<Col xs={12} md={6}>
								<AccountSeatsUsed />
							</Col>
							<Col xs={12} md={6}>
								<AccountDefaultRole />
							</Col>
						</Row>
						<AccountMembersList />
					</Col>
				</Row>
			</Container>
		</div>
	);
}
