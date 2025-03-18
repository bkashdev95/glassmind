import { Col, Container, Row } from 'react-bootstrap';
import { files } from '../data';
import { Files, ProfileHeader } from '../widgets';

export default function ProfileFiles() {
  return (
    <div className="main-content">
      <ProfileHeader />
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Files files={files} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
