/** @format */
import FeatherIcon from "feather-icons-react";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import {
	Button,
	Card,
	Col,
	Dropdown,
	Form,
	InputGroup,
	Pagination,
	Row,
} from "react-bootstrap";
import {
	useGlobalFilter,
	usePagination,
	useRowSelect,
	useSortBy,
	useTable,
} from "react-table";
import { Avatar } from "../components";

export default function CRMContactsCards({
	contacts,
	leadScoreOptions,
	pagesOptions,
	titleOptions,
	...props
}) {
	const data = useMemo(() => contacts, []);

	const columns = useMemo(
		() => [
			{
				accessor: "imgSrc",
			},
			{
				accessor: "name",
			},
			{
				accessor: "clinician",
			},

			{
				accessor: "score",
			},

			{
				accessor: "dob",
			},
			{
				accessor: "weeksactive",
			},
		],
		[]
	);

	const {
		canNextPage,
		canPreviousPage,
		gotoPage,
		nextPage,
		page,
		pageOptions,
		prepareRow,
		previousPage,
		setGlobalFilter,
		state: { pageIndex, selectedRowIds },
	} = useTable(
		{
			columns,
			data,
			initialState: { pageSize: 60 },
		},
		useGlobalFilter,
		useSortBy,
		usePagination,
		useRowSelect
	);

	return (
		<>
			<Row className='align-items-center mb-4'>
				<Col>
					<InputGroup
						size='lg'
						className='input-group-merge input-group-reverse'>
						<Form.Control
							type='search'
							placeholder='Search'
							onChange={(e) =>
								setGlobalFilter(e.target.value ? e.target.value : undefined)
							}
						/>
						<InputGroup.Text>
							<FeatherIcon icon='search' size='1.5em' />
						</InputGroup.Text>
					</InputGroup>
				</Col>
				{/* <Col xs='auto' className='ms-n3'>
					<Select options={pagesOptions} layout='flush' size='sm' />
				</Col> */}
			</Row>
			<Row>
				{page.map((row, i) => {
					prepareRow(row);

					const [imgSrc, name, clinician, score, dob] = row.cells.map(
						(cell) => cell.value
					);

					return (
						<Col xs={12} md={6} xl={4} {...row.getRowProps()}>
							<Card>
								<Card.Body>
									<Row className='align-items-flex-end'>
										<Col>
											<Col xs='auto'>
												<small>DOB: {dob}</small>
											</Col>

											{/* <IndeterminateCheckbox
												className='form-check-circle'
												{...row.getToggleRowSelectedProps()}
											/> */}
										</Col>
										<Col xs='auto'>
											<Dropdown align='end'>
												<Dropdown.Toggle
													as='span'
													className='dropdown-ellipses'
													role='button'>
													<FeatherIcon icon='more-vertical' size='25' />
												</Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item href='#!'>Archive</Dropdown.Item>
													<Dropdown.Item href='#!'>Transfer</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</Col>
									</Row>
									<Link href='/client-dashboard' passHref>
										<Avatar as='a' size='xl' className='card-avatar'>
											<Avatar.Image
												src={imgSrc}
												className='rounded-circle'
												alt={name}
											/>
										</Avatar>
									</Link>
									<div className='text-center mb-5'>
										<h2 className='card-title'>
											<Link href='/client-dashboard'>
												<a>{name}</a>
											</Link>
										</h2>
										<p className='small text-muted mb-3'>
											Clinician: {clinician}
										</p>
										<Button
											variant='white'
											size='sm'
											href={"/client-dashboard"}>
											<FeatherIcon icon='eye' size='1.25em' className='me-1' />{" "}
											Client Dashboard
										</Button>

										<Button
											variant='white'
											size='sm'
											href={"/client-assignments-current"}
											className='ms-1'>
											<FeatherIcon
												icon='corner-down-right'
												size='1.25em'
												className='me-1'
											/>{" "}
											Assignments
										</Button>
									</div>
									{/* <hr className='card-divider mb-0' /> */}

									{/* <ListGroup className='list-group-flush mb-n3'>
										<ListGroup.Item>
											<Row>
												<Col>
													<small>Progress: </small>
													<Badge bg={`${getStatusColor(score)}-soft`}>
														{score}/10
													</Badge>
												</Col> */}

									{/* <Col xs='auto'>
													<small>DOB: {dob}</small>
												</Col>
											</Row>
										</ListGroup.Item>
									</ListGroup> */}
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
			<Row className='g-0'>
				<Col>
					<Pagination className='pagination-tabs justify-content-start'>
						<Pagination.Item
							disabled={!canPreviousPage}
							onClick={() => previousPage()}>
							<FeatherIcon icon='arrow-left' size='1em' className='me-1' /> Prev
						</Pagination.Item>
					</Pagination>
				</Col>
				<Col>
					<Pagination className='pagination-tabs justify-content-center'>
						{pageOptions.map((option, index) => (
							<Pagination.Item
								key={index}
								active={option === pageIndex}
								onClick={() => gotoPage(option)}>
								{option + 1}
							</Pagination.Item>
						))}
					</Pagination>
				</Col>
				<Col>
					<Pagination className='pagination-tabs justify-content-end'>
						<Pagination.Item disabled={!canNextPage} onClick={() => nextPage()}>
							Next{" "}
							<FeatherIcon icon='arrow-right' size='1em' className='ms-1' />
						</Pagination.Item>
					</Pagination>
				</Col>
			</Row>
		</>
	);
}
