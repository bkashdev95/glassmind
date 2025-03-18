/** @format */

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { contacts } from "../data";
import {
	CRMContactsCards,
	CRMContactsHeader,
	CRMContactsTable,
} from "../widgets";

export default function CRMContacts() {
	const [activeTab, setActiveTab] = useState(0);

	//Select
	const pagesOptions = [
		{ value: 5, label: "5 per page" },
		{ value: 10, label: "10 per page" },
		{ value: -1, label: "All" },
	];

	// Filter;
	// const titleOptions = [
	// 	{ value: "*", label: "Any" },
	// 	{ value: "designer", label: "Designer" },
	// 	{ value: "developer", label: "Developer" },
	// 	{ value: "owner", label: "Owner" },
	// 	{ value: "founder", label: "Founder" },
	// ];

	const leadScoreOptions = [
		{ value: "-1", label: "Any" },
		{ value: "1", label: "1+" },
		{ value: "2", label: "2+" },
		{ value: "3", label: "3+" },
		{ value: "4", label: "4+" },
		{ value: "5", label: "5+" },
		{ value: "6", label: "6+" },
		{ value: "7", label: "7+" },
		{ value: "8", label: "8+" },
		{ value: "9", label: "9+" },
		{ value: "10", label: "10" },
	];

	return (
		<div className='main-content'>
			<Container fluid>
				<Row className='justify-content-center'>
					<Col xs={12}>
						<CRMContactsHeader
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
						{activeTab === 0 && (
							//Update this for row/table layout

							<CRMContactsTable
								contacts={contacts}
								// leadScoreOptions={leadScoreOptions}
								// pagesOptions={pagesOptions}
								// titleOptions={titleOptions}
							/>
						)}
						{activeTab === 1 && (
							//Update this for card style layout

							<CRMContactsCards
								contacts={contacts}
								leadScoreOptions={leadScoreOptions}
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
