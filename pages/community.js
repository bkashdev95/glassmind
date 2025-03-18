import { Badge, Col, Container, Row } from 'react-bootstrap';
import { useGetLatest } from 'react-table';
import { Header } from '../components';

export default function Changelog() {
  return (
    <div className="main-content pb-6">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} lg={10} xl={8}>
            <Header className="mt-md-5">
              <Header.Body>
                <Header.Pretitle>Documentation</Header.Pretitle>
                <Header.Title>Changelog</Header.Title>
              </Header.Body>
            </Header>
            <h2 className="d-inline-block">
              <Badge bg="primary-soft" className="mt-n1">
                v1.0.1
              </Badge>
            </h2>
            <span className="text-muted"> – November 16, 2021</span>
            <ul>
              <li>Replaced react-mapbox-gl with react-map-gl.</li>
              <li>Updated dependencies.</li>
              <li>Updated README.md.</li>
            </ul>
            <p>
              <strong>New files:</strong>
            </p>
            <ul>
              <li>
                <code>package-lock.json</code>
              </li>
            </ul>
            <p>
              <strong>Updated files:</strong>
            </p>
            <ul className="mb-5">
              <li>
                <code>package.json</code>
              </li>
              <li>
                <code>pages/getting-started.js</code>
              </li>
              <li>
                <code>README.md</code>
              </li>
              <li>
                <code>yarn.lock</code>
              </li>
            </ul>
            <h2 className="d-inline-block">
              <Badge bg="primary-soft" className="mt-n1">
                v1.0.0
              </Badge>
            </h2>
            <span className="text-muted"> – October 19, 2021</span>
            <ul>
              <li>Initial release of Dashkit React! Lots more coming soon though 😁</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
