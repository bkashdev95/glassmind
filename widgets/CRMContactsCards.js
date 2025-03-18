/** @format */

import FeatherIcon from "feather-icons-react";
import Link from "next/link";
import React, { useMemo } from "react";
import {
	Alert,
	Badge,
	Button,
	Card,
	CloseButton,
	Col,
	Dropdown,
	Form,
	InputGroup,
	ListGroup,
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
import { IndeterminateCheckbox, Select } from "../components/vendor";
import { getStatusColor } from "../helpers";

export default function CRMContactsCardsResults({
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
				accessor: "title",
			},
			{
				accessor: "clinician",
			},
			{
				accessor: "email",
			},
			{
				accessor: "phone",
			},
			{
				accessor: "score",
			},

			{
				accessor: "birthdate",
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
			initialState: { pageSize: 9 },
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

					const [imgSrc, title, clinician, email, phone, birthdate, company] =
						row.cells.map((cell) => cell.value);

					return (
						<Col xs={12} md={6} xl={4} {...row.getRowProps()}>
							<Card>
								<Card.Body>
									<Row className='align-items-center'>
										<Col>
											<IndeterminateCheckbox
												className='form-check-circle'
												{...row.getToggleRowSelectedProps()}
											/>
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
									<Link href='/profile-posts' passHref>
										<Avatar as='a' size='xl' className='card-avatar'>
											<Avatar.Image
												src={imgSrc}
												className='rounded-circle'
												alt={title}
											/>
										</Avatar>
									</Link>
									<div className='text-center mb-5'>
										<h2 className='card-title'>
											<Link href='/profile-posts'>
												<a>{title}</a>
											</Link>
										</h2>
										<p className='small text-muted mb-3'>
											Clinician: {clinician}
										</p>
										<Button variant='white' size='sm' href={`tel: ${phone}`}>
											<FeatherIcon icon='phone' size='1em' className='me-1' />{" "}
											View
										</Button>
										<Button
											variant='white'
											size='sm'
											href={`mailto:${email}`}
											className='ms-1'>
											<FeatherIcon icon='mail' size='1em' className='me-1' />{" "}
											Assignments
										</Button>
									</div>
									<hr className='card-divider mb-0' />
									<ListGroup className='list-group-flush mb-n3'>
										<ListGroup.Item>
											<Row>
												<Col>
													<small>Clinician</small>
												</Col>
												<Col xs='auto'>
													<small>{company}</small>
												</Col>
											</Row>
										</ListGroup.Item>
										{/* <ListGroup.Item>
											<Row>
												<Col>
													<small>Status</small>
												</Col>
												<Col xs='auto'>
													<Badge bg={`${getStatusColor(score)}-soft`}>
														{score}/10
													</Badge>
												</Col>
											</Row>
										</ListGroup.Item> */}
									</ListGroup>
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
			{Object.keys(selectedRowIds).length > 0 && (
				<Alert variant='dark' className='list-alert alert-dismissible border'>
					<Row className='align-items-center'>
						<Col>
							<Form.Check
								type='checkbox'
								label={`${Object.keys(selectedRowIds).length} deal(s)`}
								checked
								disabled
							/>
						</Col>
						<Col xs='auto' className='me-n3'>
							<Button variant='white-20' size='sm'>
								Edit
							</Button>
							<Button variant='white-20' size='sm' className='ms-1'>
								Delete
							</Button>
						</Col>
					</Row>
					<CloseButton />
				</Alert>
			)}
		</>
	);
}
