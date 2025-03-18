/** @format */

import Link from "next/link";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { Header } from "../components";

export default function GettingStarted() {
	return (
		<div className='main-content pb-6'>
			<Container fluid>
				<Row className='justify-content-center'>
					<Col xs={12} lg={10} xl={8}>
						<Header className='mt-md-5'>
							<Header.Body>
								<Header.Pretitle>Documentation</Header.Pretitle>
								<Header.Title className='display-4'>
									Getting Started
								</Header.Title>
							</Header.Body>
						</Header>
						<p>
							This guide will help you get started with Dashkit React! All the
							important stuff – compiling the source, file structure, build
							tools – is documented here, but should you have any questions,
							always feel free to reach out to support@goodthemes.co.
						</p>
						<Header className='mt-md-5'>
							<Header.Body>
								<Header.Title>New & Extended Components</Header.Title>
							</Header.Body>
						</Header>
						<p>
							Dashkit React extends Bootstrap by not only building on top of its
							existing components, but also introducing entirely new components
							and plugins. The best way to get an overview of this is to run
							through the{" "}
							<code>
								<Link href='/components#alerts'>
									<a>components</a>
								</Link>
							</code>{" "}
							page.
						</p>
						<Header className='mt-md-5'>
							<Header.Body>
								<Header.Title>Dev Setup</Header.Title>
							</Header.Body>
						</Header>
						<p>To get started, you need to do the following:</p>
						<ol>
							<li>
								<strong>Make sure you have Node installed</strong> since Dashkit
								React uses npm to manage dependencies. If you don't, installing
								is quite easy, just visit the{" "}
								<a href='https://nodejs.org/en/download/'>
									Node Downloads page
								</a>{" "}
								and install it.
							</li>
							<li>
								<strong>Unzip your theme and open your command line</strong>,
								making sure your command line prompt is at the root of the
								unzipped theme directory.
							</li>
							<li>
								<Badge bg='primary-soft'>
									<code>npm install --force</code>
								</Badge>
								: Open your command line to the root directory of your unzipped
								theme and run to install all of Dashkit's dependencies.
							</li>
						</ol>
						<p>
							It's that simple! If you're not used to using terminal, don't
							worry, this is as advanced as it gets.
						</p>
						<Header className='mt-md-5'>
							<Header.Body>
								<Header.Title>Compiling</Header.Title>
							</Header.Body>
						</Header>
						<p>
							Next.js is used to manage Dashkit React development. Open your
							command line to the root directory of the theme to use the
							following commands:
						</p>
						<ul>
							<li>
								<Badge bg='primary-soft'>
									<code>npm run dev</code>
								</Badge>
								: Starts the "development server" on port 3000. Any changes made
								to the source files will be compiled as soon as you save the
								file.
							</li>
							<li>
								<Badge bg='primary-soft'>
									<code>npm run build</code>
								</Badge>
								: Builds the application for production usage.
							</li>
						</ul>
						<p>
							Please read the{" "}
							<a href='https://nextjs.org/' target='_blank'>
								Next.js documentation
							</a>{" "}
							for more info.
						</p>
						<Header className='mt-md-5'>
							<Header.Body>
								<Header.Title>File Structure</Header.Title>
							</Header.Body>
						</Header>
						<ul>
							<li>
								<strong>📁 components</strong> - Basic components
							</li>
							<li>
								<strong>📁 data</strong> - Sample data
							</li>
							<li>
								<strong>📁 helpers</strong> - Helper functions
							</li>
							<li>
								<strong>📁 modals</strong> - Modal and Offcanvas dialogs
							</li>
							<li>
								<strong>📁 pages</strong> - Pages
							</li>
							<li>
								<strong>📁 public</strong> - Publis assets
							</li>
							<li>
								<strong>📁 styles</strong> - SCSS source
							</li>
							<li>
								<strong>📁 widgets</strong> - Complex components
							</li>
							<li>
								<strong>📄 .gitignore</strong> - Hide all unnecessary files from
								Git
							</li>
							<li>
								<strong>📄 package.json</strong> - List of dependencies and npm
								information
							</li>
							<li>
								<strong>📄 package-lock.json</strong> - Describes the exact
								dependency tree that was generated
							</li>
							<li>
								<strong>📄 README.md</strong> - App info
							</li>
						</ul>
						<Header className='mt-md-5'>
							<Header.Body>
								<Header.Title>Customizing SCSS</Header.Title>
							</Header.Body>
						</Header>
						<p>
							The best way to customize your app appearance is to use the source
							SCSS files. The 2 major benefits of this strategy are using
							variable overrides to easily customize app styles, plus you never
							have to touch Bootstrap or Dashkit's source, meaning future
							updates will be much, much, simpler. There are 2 provided files
							that make this strategy simple to implement:
						</p>
						<ul>
							<li>
								<code>user-variables.scss</code>: This file can be used to
								override Bootstrap core and Dashkit variables for customizing
								elements that have been tied to variables.
							</li>
							<li>
								<code>user.scss</code>: This file can be used for writing custom
								SCSS that will be compiled alongside Bootstrap and Dashkit's
								core files.
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
