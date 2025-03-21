/** @format */

import FeatherIcon from "feather-icons-react";
import Link from "next/link";
import React, { useMemo } from "react";
import {
	Button,
	Card,
	CloseButton,
	Col,
	Form,
	InputGroup,
	ListGroup,
	Modal,
	Row,
} from "react-bootstrap";
import { useGlobalFilter, usePagination, useTable } from "react-table";
import { Avatar } from "../components";
// import { getStatusColor } from "../helpers";

export default function ModalMembers({ visible, onDismiss, ...props }) {
	const data = useMemo(
		() => [
			{
				imgSrc: "/img/avatars/profiles/avatar-5.jpg",
				dob: "04/12/88",
				name: "Miyah Myles",
			},
			{
				imgSrc: "/img/avatars/profiles/avatar-6.jpg",
				dob: "09/04/92",
				name: "Ryu Duke",
			},
			{
				imgSrc: "/img/avatars/profiles/avatar-7.jpg",
				dob: "11/27/91",
				name: "Glen Rouse",
			},
			{
				imgSrc: "/img/avatars/profiles/avatar-8.jpg",
				dob: "01/05/02",
				name: "Grace Gross",
			},
		],
		[]
	);

	const columns = useMemo(
		() => [
			{
				accessor: "imgSrc",
			},
			{
				accessor: "dob",
			},
			{
				accessor: "name",
			},
		],
		[]
	);

	const { page, prepareRow, setGlobalFilter } = useTable(
		{
			columns,
			data,
		},
		useGlobalFilter,
		usePagination
	);

	return (
		<Modal show={visible} onHide={onDismiss} centered {...props}>
			<Card className='modal-card'>
				<Card.Header>
					<h4 className='card-header-title'>Send to Clients</h4>
					<CloseButton onClick={onDismiss} />
				</Card.Header>
				<Card.Header>
					<form>
						<InputGroup className='input-group-merge input-group-flush input-group-reverse'>
							<Form.Control
								type='search'
								placeholder='Search'
								onChange={(e) =>
									setGlobalFilter(e.target.value ? e.target.value : undefined)
								}
							/>
							<InputGroup.Text>
								<FeatherIcon icon='search' size='1em' />
							</InputGroup.Text>
						</InputGroup>
					</form>
				</Card.Header>
				<Card.Body>
					<ListGroup className='list-group-flush my-n3'>
						{page.map((row, i) => {
							prepareRow(row);

							const [imgSrc, dob, name] = row.cells.map((cell) => cell.value);

							return (
								<ListGroup.Item {...row.getRowProps()}>
									<Row className='align-items-center'>
										<Col xs='auto'>
											<Avatar as='a'>
												<Avatar.Image
													className='rounded-circle'
													src={imgSrc}
													alt={name}
												/>
											</Avatar>
										</Col>
										<Col className='ms-n2'>
											<h4 className='mb-1 name'>
												<a>{name}</a>
											</h4>
											<h5 className='text-muted mb-1'>
												<a>DOB: {dob}</a>
											</h5>
										</Col>
										<Col xs='auto'>
											<Button
												variant='white'
												size='sm'
												href={`#!`}
												className='ms-1'>
												<FeatherIcon
													icon='corner-down-right'
													size='1.25em'
													className='me-1'
												/>{" "}
												Send to Client
											</Button>
										</Col>
									</Row>
								</ListGroup.Item>
							);
						})}
					</ListGroup>
				</Card.Body>
			</Card>
		</Modal>
	);
}
