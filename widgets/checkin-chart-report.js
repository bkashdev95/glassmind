/** @format */

import React from "react";
import { Card, Table } from "react-bootstrap";

export default function CheckInChartReport({ ...props }) {
	return (
		<Card {...props}>
			<Card.Header>
				<h4 className='card-header-title'>Virtualized Support</h4>
			</Card.Header>

			<Table size='sm' className='card-table table-nowrap'>
				<p></p>
			</Table>
		</Card>
	);
}
