import FeatherIcon from 'feather-icons-react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';

export default function ProfilePosts() {
  return (
    <div className="main-content">
      <div className="pt-7 pb-8 bg-dark bg-ellipses">
        <Container fluid>
          <Row className="justify-content-center">
            <Col md={10} lg={8} xl={6}>
              <h1 className="display-3 text-center text-white">Plans & Pricing</h1>
              <p className="lead text-center text-muted">
                We have plans and prices that fit your business perfectly. Make your client site a success with our
                products.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        <Row className="mt-n7">
          <Col xs={12} lg={4}>
            <Card>
              <Card.Body>
                <h6 className="text-uppercase text-center text-muted my-4">Basic plan</h6>
                <Row className="g-0 align-items-center justify-content-center">
                  <Col xs="auto">
                    <div className="h2 mb-0">$</div>
                  </Col>
                  <Col xs="auto">
                    <div className="display-2 mb-0">19</div>
                  </Col>
                </Row>
                <div className="h6 text-uppercase text-center text-muted mb-5">/ month</div>
                <div className="mb-3">
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item className="d-flex align-items-center justify-content-between px-0">
                      <small>Unlimited activity</small>{' '}
                      <FeatherIcon icon="check-circle" size="1em" className="text-success" />
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-between px-0">
                      <small>Direct messaging</small>{' '}
                      <FeatherIcon icon="check-circle" size="1em" className="text-success" />
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-between px-0">
                      <small>Members</small> <small>10 members</small>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-between px-0">
                      <small>Admins</small> <small>No access</small>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
                <Button variant="light" className="w-100">
                  Start with Basic
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={4}>
            <Card>
              <Card.Body>
                <h6 className="text-uppercase text-center text-muted my-4">Standard plan</h6>
                <Row className="g-0 align-items-center justify-content-center">
                  <Col xs="auto">
                    <div className="h2 mb-0">$</div>
                  </Col>
                  <Col xs="auto">
                    <div className="display-2 mb-0">29</div>
                  </Col>
                </Row>
                <div className="h6 text-uppercase text-center text-muted mb-5">/ month</div>
                <div className="mb-3">
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item className="d-flex align-items-center justify-content-between px-0">
                      <small>Unlimited activity</small>{' '}
                      <FeatherIcon icon="check-circle" size="1em" className="text-success" />
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-between px-0">
                      <small>Direct messaging</small>{' '}
                      <FeatherIcon icon="check-circle" size="1em" className="text-success" />
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-between px-0">
                      <small>Members</small> <small>50 members</small>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-between px-0">
                      <small>Admins</small> <small>5 admins</small>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
                <Button className="w-100">Start with Standard</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={4}>
            <Card>
              <Card.Body>
                <h6 className="text-uppercase text-center text-muted my-4">Enterprise plan</h6>
                <Row className="g-0 align-items-center justify-content-center">
                  <Col xs="auto">
                    <div className="h2 mb-0">$</div>
                  </Col>
                  <Col xs="auto">
                    <div className="display-2 mb-0">99</div>
                  </Col>
                </Row>
                <div className="h6 text-uppercase text-center text-muted mb-5">/ month</div>
                <div className="mb-3">
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item className="d-flex align-items-center justify-content-between px-0">
                      <small>Unlimited activity</small>{' '}
                      <FeatherIcon icon="check-circle" size="1em" className="text-success" />
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-between px-0">
                      <small>Direct messaging</small>{' '}
                      <FeatherIcon icon="check-circle" size="1em" className="text-success" />
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-between px-0">
                      <small>Members</small> <small>Unlimited</small>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center justify-content-between px-0">
                      <small>Admins</small> <small>Unlimited</small>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
                <Button variant="light" className="w-100">
                  Start with Enterprise
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Card className="card-inactive">
              <Card.Body>
                <h3 className="text-center">Need some help deciding?</h3>
                <p className="text-muted text-center">
                  We can help you decide what’s the best for your company based on a lot of factors and other cool stuff
                  that I’m going to write about.
                </p>
                <div className="text-center">
                  <Button variant="outline-secondary">Contact us</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="card-inactive">
              <Card.Body>
                <h3 className="text-center">Want a custom plan?</h3>
                <p className="text-muted text-center">
                  We can help you decide what’s the best for your company based on a lot of factors and other cool stuff
                  that I’m going to write about.
                </p>
                <div className="text-center">
                  <Button variant="outline-secondary">Build it</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
