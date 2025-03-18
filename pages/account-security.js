import { Col, Container, Row } from 'react-bootstrap';
import { AccountChangeYourPassword, AccountDeviceHistory, AccountHeader, AccountTwoFactorSecurity } from '../widgets';

export default function AccountSecurity() {
  return (
    <div className="main-content">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} lg={10} xl={8}>
            <AccountHeader />
            <AccountTwoFactorSecurity />
            <hr className="my-5" />
            <AccountChangeYourPassword />
            <hr className="my-5" />
            <AccountDeviceHistory />
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
