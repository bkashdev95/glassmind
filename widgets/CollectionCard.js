/** @format */

import { ModalMembers, ModalAssignmentView } from "../modals";
import FeatherIcon from "feather-icons-react";
import Link from "next/link";
import React, { useMemo, useState } from "react";
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
import { skillsbuilding } from "../data";
import { getStatusColor } from "../helpers";

export default function CollectionCard({
	collections,
	pagesOptions,
	titleOptions,
	...props
}) {
	const [modalAssignmentViewVisible, setModalAssignmentViewVisible] =
		useState(false);

	const [modalMembersVisible, setModalMembersVisible] = useState(false);
	//DATA#
	const data = useMemo(() => skillsbuilding, []);

	const columns = useMemo(
		() => [
			{
				accessor: "imgSrc",
			},
			{
				accessor: "title",
			},
			{
				accessor: "subtitle",
			},
			{
				accessor: "shortdesc",
			},
			{
				accessor: "ttc",
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
			initialState: { pageSize: 30 },
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

					const [imgSrc, title, subtitle, shortdesc, ttc] = row.cells.map(
						(cell) => cell.value
					);

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
													<Dropdown.Item href='#!'>Favorite</Dropdown.Item>
													<Dropdown.Item href='#!'>
														Send to Client
													</Dropdown.Item>
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
											<a
												onClick={() => setModalAssignmentViewVisible(true)}
												href={`#!`}>
												<a>{title}</a>
											</a>
										</h2>
										<p className='small text-muted mb-3'>{subtitle}</p>
										<Button
											//MODAL#
											onClick={() => setModalAssignmentViewVisible(true)}
											variant='white'
											size='sm'
											href={`#!`}
											className='ms-1'>
											<FeatherIcon icon='eye' size='1.25em' className='me-1' />{" "}
											View
										</Button>
										<Button
											//MODAL#
											onClick={() => setModalMembersVisible(true)}
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
									</div>
									<hr className='card-divider mb-0' />
									<ListGroup className='list-group-flush mb-n3'>
										<ListGroup.Item>
											<Row>
												<Col>
													<a className='small text-muted mb-3'>{shortdesc}</a>
													{"  "}
													<a className='small text-muted mb-3'>
														Time to complete:
													</a>
													{"  "}
													<a className='small text-muted mb-3'>{ttc}</a>
												</Col>
											</Row>
										</ListGroup.Item>
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
			{/* {Object.keys(selectedRowIds).length > 0 && (
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
								Favorite
							</Button>
							<Button variant='white-20' size='sm' className='ms-1'>
								Unfavorite
							</Button>
						</Col>
					</Row>
					<CloseButton />
				</Alert>
			)} */}
			<ModalAssignmentView
				visible={modalAssignmentViewVisible}
				onDismiss={() => setModalAssignmentViewVisible(false)}
			/>
			<ModalMembers
				visible={modalMembersVisible}
				onDismiss={() => setModalMembersVisible(false)}
			/>
		</>
	);
}
