/** @format */

import { ModalMembers, ModalAssignmentView } from "../modals";
import className from "classnames";
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
	Table,
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

export default function CollectionTable({
	collections,
	pagesOptions,
	titleOptions,
	...props
}) {
	const [modalMembersVisible, setModalMembersVisible] = useState(false);
	const [modalAssignmentViewVisible, setModalAssignmentViewVisible] =
		useState(false);
	//DATA#
	const data = useMemo(() => skillsbuilding, []);

	const columns = useMemo(
		() => [
			{
				id: "selection",
				// Header: ({ getToggleAllRowsSelectedProps }) => (
				// 	<div>
				// 		<IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
				// 	</div>
				// ),
				Header: "Fav",
				//#todo001 sort by favorite or not - floats favorites to top of any search (i.e. skills building favs (assignment title alphabetical decending below) at top always then unselected (assignment title alphabetical decending below)
				// disableSortBy: false,
				// accessor: "fav",
				Cell: ({ row }) => (
					<div className='d-flex justify-content-center'>
						<IndeterminateCheckbox
							className='form-check-circle'
							{...row.getToggleRowSelectedProps()}
						/>
					</div>
				),
			},
			{
				Header: "Send to Client",
				disableSortBy: true,
				Cell: () => (
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
						Send
					</Button>
				),
			},

			{
				Header: "Assignment Title",
				accessor: "title",
				Cell: (props) => (
					<>
						{/* //DATA# - get and pass link to display assignment*/}
						<Avatar
							onClick={() => setModalAssignmentViewVisible(true)}
							size='lg'
							className='me-4'>
							<Avatar.Image
								src={props.cell.row.original.imgSrc}
								alt={props.value}
								className='rounded-circle'
							/>
						</Avatar>
						<Link href='/profile-posts'>
							<a className='text-reset'>{props.value}</a>
						</Link>
					</>
				),
			},
			{
				Header: "Description",
				accessor: "shortdesc",
			},
			{
				Header: "Time to Complete",
				accessor: "ttc",
			},

			// {
			// 	Header: "Add to List",

			// 	Cell: ({ value }) => (
			// 		<a className='text-reset' href={`tel:${value}`}>
			// 			{value}
			// 		</a>
			// 	),
			// },

			{
				id: "actions",
				disableSortBy: true,
				Cell: () => (
					<Dropdown align='end'>
						<Dropdown.Toggle
							as='span'
							className='dropdown-ellipses'
							role='button'>
							<FeatherIcon icon='more-vertical' size='25' />
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item href='#!'>View</Dropdown.Item>{" "}
							<Dropdown.Item href='#!'>Send to Client</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				),
			},
		],
		[]
	);

	const {
		canNextPage,
		canPreviousPage,
		getTableBodyProps,
		gotoPage,
		headerGroups,
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
		},
		useGlobalFilter,
		useSortBy,
		usePagination,
		useRowSelect
	);

	return (
		<>
			<Card>
				<Card.Header>
					<Row className='align-items-center'>
						<Col>
							<InputGroup className='input-group-merge input-group-flush input-group-reverse'>
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

						{/* Paging/Filter options */}
						{/* <Col xs='auto' className='me-n3'>
							<Select options={pagesOptions} layout='flush' size='sm' />
						</Col> */}
						{/* <Col xs='auto'>
							<Dropdown align='right' className='dropdown-card'>
								<Dropdown.Toggle bsPrefix='btn btn-white btn-sm'>
									<FeatherIcon className='me-1' icon='sliders' size='1em' />{" "}
									Filter
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Card.Header>
										<h4 className='card-header-title'>Filters</h4>
									</Card.Header>
									<Card.Body>
										<ListGroup className='list-group-flush mt-n4 mb-4'>
											<ListGroup.Item>
												<Row>
													<Col>
														<small>Title</small>
													</Col>
													<Col xs='auto'>
														<Select options={titleOptions} size='sm' />
													</Col>
												</Row>
											</ListGroup.Item>
											<ListGroup.Item>
												<Row>
													<Col>
														<small>Lead score</small>
													</Col>
													<Col xs='auto'>
														<Select options={leadScoreOptions} size='sm' />
													</Col>
												</Row>
											</ListGroup.Item>
										</ListGroup>
										<Button className='w-100'>Apply filter</Button>
									</Card.Body>
								</Dropdown.Menu>
							</Dropdown>
						</Col> */}
					</Row>
				</Card.Header>
				<Table size='sm' className='card-table table-wrap' hover responsive>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps({ role: null })}>
								{headerGroup.headers.map((column) => (
									<th
										{...column.getHeaderProps(
											column.getSortByToggleProps({
												className: className(
													column.className,
													column.canSort && "is-sortable"
												),
												role: null,
											})
										)}>
										{column.render("Header")}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody className='fs-base' {...getTableBodyProps({ role: null })}>
						{page.map((row, i) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps({ role: null })}>
									{row.cells.map((cell) => {
										return (
											<td
												{...cell.getCellProps({
													className: cell.column.className,
													role: null,
												})}>
												{cell.render("Cell")}
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</Table>
				<Card.Footer className='d-flex justify-content-between'>
					<Pagination className='card-pagination pagination-tabs'>
						<Pagination.Item
							className='ps-0 pe-4 border-end'
							disabled={!canPreviousPage}
							onClick={() => previousPage()}>
							<FeatherIcon icon='arrow-left' size='1em' className='me-1' /> Prev
						</Pagination.Item>
					</Pagination>
					<Pagination className='card-pagination pagination-tabs'>
						{pageOptions.map((option, index) => (
							<Pagination.Item
								key={index}
								active={option === pageIndex}
								onClick={() => gotoPage(option)}>
								{option + 1}
							</Pagination.Item>
						))}
					</Pagination>
					<Pagination className='card-pagination pagination-tabs'>
						<Pagination.Item
							className='ps-4 pe-0 border-start'
							disabled={!canNextPage}
							onClick={() => nextPage()}>
							Next{" "}
							<FeatherIcon icon='arrow-right' size='1em' className='ms-1' />
						</Pagination.Item>
					</Pagination>
				</Card.Footer>
			</Card>
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
								Edit
							</Button>
							<Button variant='white-20' size='sm' className='ms-1'>
								Delete
							</Button>
						</Col>
					</Row>
					<CloseButton />
				</Alert> */}
			{/* )} */}
			<ModalMembers
				visible={modalMembersVisible}
				onDismiss={() => setModalMembersVisible(false)}
			/>
			<ModalAssignmentView
				visible={modalAssignmentViewVisible}
				onDismiss={() => setModalAssignmentViewVisible(false)}
			/>
		</>
	);
}
