import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import { Badge, Button, Card, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { Avatar } from '../components';
import { getStatusColor } from '../helpers';
import { ProfileHeader } from '../widgets';

export default function ProfileSubscribers() {
  const data = [
    {
      coverSrc: '/img/covers/profile-cover-2.jpg',
      description: 'Woprking on the latest API integration.',
      imgSrc: '/img/avatars/profiles/avatar-2.jpg',
      status: 'Online',
      tags: ['UX Team', 'Research Team'],
      title: 'Ab Hadley',
    },
    {
      coverSrc: '/img/covers/profile-cover-3.jpg',
      description: 'Vactioning with the fam.',
      imgSrc: '/img/avatars/profiles/avatar-3.jpg',
      status: 'Online',
      tags: ['Reliability', 'QA'],
      title: 'Adolfo Hess',
    },
    {
      coverSrc: '/img/covers/profile-cover-4.jpg',
      description: 'Arts District project management stuff.',
      imgSrc: '/img/avatars/profiles/avatar-4.jpg',
      status: 'Busy',
      tags: ['Front-End', 'UX'],
      title: 'Daniela Dewitt',
    },
    {
      coverSrc: '/img/covers/profile-cover-5.jpg',
      description: 'Trying to finish this research!',
      imgSrc: '/img/avatars/profiles/avatar-5.jpg',
      status: 'Online',
      tags: ['Back-end', 'Ops'],
      title: 'Miyah Myles',
    },
    {
      coverSrc: '/img/covers/profile-cover-6.jpg',
      description: 'Updating the compiler to work with Jenkins.',
      imgSrc: '/img/avatars/profiles/avatar-6.jpg',
      status: 'Online',
      tags: ['HR', 'Management'],
      title: 'Ryu Duke',
    },
    {
      coverSrc: '/img/covers/profile-cover-7.jpg',
      description: '😭 Working on the summit deck...',
      imgSrc: '/img/avatars/profiles/avatar-7.jpg',
      status: 'Offline',
      tags: ['UX Team', 'Research Team'],
      title: 'Glen Rouse',
    },
  ];

  const dropdown = (
    <Dropdown align="end" className="card-dropdown">
      <Dropdown.Toggle as="span" className="dropdown-ellipses text-white" role="button">
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
    <Col xs={12} md={6} xl={4} key={index}>
      <Card>
        {dropdown}
        <Card.Img variant="top" src={item.coverSrc} alt={item.title} />
        <Card.Body className="text-center">
          <Link href="/profile-posts" passHref>
            <Avatar as="a" size="xl" className="card-avatar card-avatar-top">
              <Avatar.Image src={item.imgSrc} className="rounded-circle border border-4 border-card" alt={item.title} />
            </Avatar>
          </Link>
          <Card.Title as="h2">
            <Link href="/profile-posts">
              <a>{item.title}</a>
            </Link>
          </Card.Title>
          <p className="small text-muted mb-3">{item.description}</p>
          <Card.Text>
            {item.tags.map((tag, index) => (
              <Badge bg="secondary-soft" className="ms-1" key={index}>
                UX Team
              </Badge>
            ))}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="card-footer-boxed">
          <Row className="align-items-center justify-content-between">
            <Col xs="auto">
              <small>
                <span className={`text-${getStatusColor(item.status)}`}>●</span> {item.status}
              </small>
            </Col>
            <Col xs="auto">
              <Button size="sm">Subscribe</Button>
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
