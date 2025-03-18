import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import { Card, Col, Container, Dropdown, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Avatar } from '../components';
import { ProfileHeader } from '../widgets';

export default function ProfileGroups() {
  const data = [
    {
      description: 'Launchday is a SaaS website builder with a focus on quality, easy to build product sites.',
      imgSrc: '/img/avatars/teams/team-logo-1.jpg',
      title: 'Launchday',
    },
    {
      description: 'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
      imgSrc: '/img/avatars/teams/team-logo-2.jpg',
      title: 'Medium Corporation',
    },
    {
      description: 'Lyft is an on-demand transportation company based in San Francisco, California.',
      imgSrc: '/img/avatars/teams/team-logo-3.jpg',
      title: 'Lyft',
    },
    {
      description: 'PayPal is a worldwide online payments system that supports online money transfers and services.',
      imgSrc: '/img/avatars/teams/team-logo-4.jpg',
      title: 'PayPal',
    },
    {
      description:
        'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
      imgSrc: '/img/avatars/teams/team-logo-5.jpg',
      title: 'Dropbox Inc.',
    },
    {
      description: 'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
      imgSrc: '/img/avatars/teams/team-logo-6.jpg',
      title: 'Squarespace',
    },
    {
      description: 'GitHub is a web-based hosting service for version control of code using Git.',
      imgSrc: '/img/avatars/teams/team-logo-7.jpg',
      title: 'Github',
    },
    {
      description:
        'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
      imgSrc: '/img/avatars/teams/team-logo-8.jpg',
      title: 'Slack',
    },
  ];

  const dropdown = (
    <Dropdown align="end" className="card-dropdown">
      <Dropdown.Toggle as="span" className="dropdown-ellipses" role="button">
        <FeatherIcon icon="more-vertical" size="17" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#!">Action</Dropdown.Item>
        <Dropdown.Item href="#!">Another action</Dropdown.Item>
        <Dropdown.Item href="#!">Something else here</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const items = data.map((item, index) => (
    <Col xs={12} lg={6} key={index}>
      <Card>
        <Card.Body className="text-center">
          {dropdown}
          <Link href="/team-overview" passHref>
            <Avatar as="a" size="lg" className="card-avatar mx-auto">
              <Avatar.Image src={item.imgSrc} className="rounded" alt={item.title} />
            </Avatar>
          </Link>
          <Card.Title as="h2">
            <Link href="/team-overview">
              <a>{item.title}</a>
            </Link>
          </Card.Title>
          <Card.Text className="text-muted">{item.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Row className="align-items-center">
            <Col>
              <Card.Text className="small text-muted">
                <FeatherIcon icon="clock" size="1em" /> Updated 2hr ago
              </Card.Text>
            </Col>
            <Col xs="auto">
              <Avatar.Group>
                <Link href="/profile-posts" passHref>
                  <Avatar as="a" size="xs">
                    <OverlayTrigger overlay={<Tooltip>Ab Hadley</Tooltip>}>
                      <Avatar.Image
                        src="/img/avatars/profiles/avatar-2.jpg"
                        alt="Ab Hadley"
                        className="rounded-circle"
                      />
                    </OverlayTrigger>
                  </Avatar>
                </Link>
                <Link href="/profile-posts" passHref>
                  <Avatar as="a" size="xs">
                    <OverlayTrigger overlay={<Tooltip>Adolfo Hess</Tooltip>}>
                      <Avatar.Image
                        src="/img/avatars/profiles/avatar-3.jpg"
                        alt="Adolfo Hess"
                        className="rounded-circle"
                      />
                    </OverlayTrigger>
                  </Avatar>
                </Link>
                <Link href="/profile-posts" passHref>
                  <Avatar as="a" size="xs">
                    <OverlayTrigger overlay={<Tooltip>Daniela Dewitt</Tooltip>}>
                      <Avatar.Image
                        src="/img/avatars/profiles/avatar-4.jpg"
                        alt="Daniela Dewitt"
                        className="rounded-circle"
                      />
                    </OverlayTrigger>
                  </Avatar>
                </Link>
                <Link href="/profile-posts" passHref>
                  <Avatar as="a" size="xs">
                    <OverlayTrigger overlay={<Tooltip>Miyah Myles</Tooltip>}>
                      <Avatar.Image
                        src="/img/avatars/profiles/avatar-5.jpg"
                        alt="Miyah Myles"
                        className="rounded-circle"
                      />
                    </OverlayTrigger>
                  </Avatar>
                </Link>
                <Avatar size="xs">
                  <Avatar.Title className="rounded-circle">+7</Avatar.Title>
                </Avatar>
              </Avatar.Group>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  ));

  return (
    <div className="main-content">
      <ProfileHeader />
      <Container fluid>
        <Row>{items}</Row>
      </Container>
    </div>
  );
}
