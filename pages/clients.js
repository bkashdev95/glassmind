/** @format */

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { contacts } from "../data";
import { ClientCard, ClientListHeader, ClientTable } from "../widgets";

export default function ClientTableResults() {
	const [activeTab, setActiveTab] = useState(1);

	//Select
	// const pagesOptions = [
	// 	{ value: 5, label: "5 per page" },
	// 	{ value: 10, label: "10 per page" },
	// 	{ value: -1, label: "All" },
	// ];

	// Filter;
	// const titleOptions = [
	// 	{ value: "*", label: "Any" },
	// 	{ value: "designer", label: "Designer" },
	// 	{ value: "developer", label: "Developer" },
	// 	{ value: "owner", label: "Owner" },
	// 	{ value: "founder", label: "Founder" },
	// ];

	return (
		<div className='main-content'>
			<Container fluid>
				<Row className='justify-content-center'>
					<Col xs={12}>
						<ClientListHeader
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
						{activeTab === 0 && (
							//Update this for row/table layout

							<ClientTable
								contacts={contacts}
								// leadScoreOptions={leadScoreOptions}
								// pagesOptions={pagesOptions}
								// titleOptions={titleOptions}
							/>
						)}
						{activeTab === 1 && (
							//Update this for card style layout

							<ClientCard
								contacts={contacts}
								// leadScoreOptions={leadScoreOptions}
								// pagesOptions={pagesOptions}
								// titleOptions={titleOptions}
							/>
						)}
					</Col>
				</Row>
			</Container>
		</div>
	);
}
