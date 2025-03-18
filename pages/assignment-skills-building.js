/** @format */

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { skillsbuilding } from "../data";
import { CollectionCard, AssignmentHeader, CollectionTable } from "../widgets";

export default function AssignmentHeaderSetting() {
	const [activeTab, setActiveTab] = useState(1);

	return (
		<div className='main-content'>
			<Container fluid>
				<Row className='justify-content-center'>
					<Col xs={12}>
						<AssignmentHeader
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
						{activeTab === 1 && (
							//Update this for row/table layout

							<CollectionTable skillsbuilding={skillsbuilding} />
						)}
						{activeTab === 0 && (
							//Update this for card style layout

							<CollectionCard skillsbuilding={skillsbuilding} />
						)}
					</Col>
				</Row>
			</Container>
		</div>
	);
}
