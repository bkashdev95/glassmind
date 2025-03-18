/** @format */
import className from "classnames";
import FeatherIcon from "feather-icons-react";
import Link from "next/link";
import React, { useMemo } from "react";
import {
	Alert,
	Button,
	Card,
	CloseButton,
	Col,
	Dropdown,
	Form,
	InputGroup,
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

export default function CRMContactsTable({ contacts }) {
	const data = useMemo(() => contacts, []);

	const columns = useMemo(
		() => [
			{
				Header: "Client Name",
				accessor: "name",
				Cell: (props) => (
					<>
						<Avatar size='sm' className='me-4'>
							<Avatar.Image
								src={props.cell.row.original.imgSrc}
								alt={props.value}
								className='rounded-circle'
							/>
						</Avatar>
						<Link href='/client-dashboard'>
							<a className='text-reset'>{props.value}</a>
						</Link>
					</>
				),
			},
			{
				Header: "Review Assignments",
				disableSortBy: true,
				Cell: () => (
					<Button
						variant='white'
						size='sm'
						href='/client-assignments-current'
						className='ms-1'>
						<FeatherIcon icon='eye' size='1.25em' className='me-1' /> Current
						Assignments
					</Button>
				),
			},
			{
				Header: "Week",
				accessor: "weeksactive",
			},
			{
				Header: "Send a Message",
				disableSortBy: true,
				Cell: () => (
					<Button variant='white' size='sm' href={`#!`} className='ms-1'>
						<FeatherIcon icon='send' size='1.25em' className='me-1' /> Send a
						Message
					</Button>
				),
			},

			{
				Header: "Give Assignments",
				Cell: () => (
					<Button
						variant='white'
						size='sm'
						href='/client-assignments-new'
						className='ms-1'>
						<FeatherIcon
							icon='corner-down-right'
							size='1.25em'
							className='me-1'
						/>{" "}
						Give Assignments
					</Button>
				),
			},
			{
				Header: "Action",
				id: "actions",
				disableSortBy: true,
				Cell: () => (
					<Dropdown align='right'>
						<Dropdown.Toggle
							as='span'
							className='dropdown-ellipses'
							role='button'>
							<FeatherIcon icon='more-vertical' size='25' />
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item href='#!'>Archive Client</Dropdown.Item>
							<Dropdown.Item href='#!'>Transfer Client</Dropdown.Item>
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
							<FeatherIcon icon='arrow-left' size='1em' className='ms-1' /> Prev
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
