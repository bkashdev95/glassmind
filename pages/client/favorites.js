/** @format */

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { collections } from "/data";
import {
	ClientHeader,
	CollectionCard,
	CRMContactsHeader,
	CollectionTable,
} from "/widgets";

export default function AssignmentHeaderSetting() {
	const [activeTab, setActiveTab] = useState(1);

	return (
		<div className='main-content'>
			<ClientHeader activeTab={activeTab} setActiveTab={setActiveTab} />
			<Container fluid>
				<Row className='justify-content-center'>
					<Col xs={12}>
						{activeTab === 0 && (
							//Update this for row/table layout

							<CollectionTable collections={collections} />
						)}
						{activeTab === 1 && (
							//Update this for card style layout

							<CollectionCard collections={collections} />
						)}
					</Col>
				</Row>
			</Container>
		</div>
	);
}
