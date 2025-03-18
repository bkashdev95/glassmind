import { Button, Card, Col, Container, Form, ListGroup, Row, Table } from 'react-bootstrap';
import { AccountHeader } from '../widgets';

export default function AccountNotifications() {
  return (
    <div className="main-content">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} lg={10} xl={8}>
            <AccountHeader />
            <Card>
              <Card.Header>
                <h4 className="card-header-title">Notifications</h4>
                <Button variant="white" size="sm">
                  Disable all
                </Button>
              </Card.Header>
              <Table size="sm" className="card-table table-nowrap">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th className="text-center">Call</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">SMS</th>
                  </tr>
                </thead>
                <tbody className="fs-base">
                  <tr>
                    <td>Direct messages</td>
                    <td></td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Form.Check defaultChecked />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Form.Check defaultChecked />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Reminders</td>
                    <td></td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Form.Check defaultChecked />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Form.Check defaultChecked />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>API Limits</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Form.Check />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Form.Check defaultChecked />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Form.Check defaultChecked />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Policy &amp; Community</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Form.Check />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Form.Check defaultChecked />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Form.Check defaultChecked />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
            <Card>
              <Card.Header>
                <h4 className="card-header-title">Subscriptions</h4>
                <Button variant="white" size="sm">
                  Unsubscribe all
                </Button>
              </Card.Header>
              <Card.Body>
                <ListGroup className="list-group-flush my-n3">
                  <ListGroup.Item>
                    <Row className="align-items-center">
                      <Col>
                        <h4 className="font-weight-base mb-1">Sales &amp; Promotions</h4>
                        <small className="text-muted">We only notify you for significant promotions</small>
                      </Col>
                      <Col xs="auto">
                        <Form.Check type="switch" defaultChecked />
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row className="align-items-center">
                      <Col>
                        <h4 className="font-weight-base mb-1">Product updates</h4>
                        <small className="text-muted">Major changes in our product offering</small>
                      </Col>
                      <Col xs="auto">
                        <Form.Check type="switch" defaultChecked />
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row className="align-items-center">
                      <Col>
                        <h4 className="font-weight-base mb-1">Newsletter</h4>
                        <small className="text-muted">Updates on what’s going on here at Landkit.</small>
                      </Col>
                      <Col xs="auto">
                        <Form.Check type="switch" defaultChecked />
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
