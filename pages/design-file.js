import { Col, Container, Row } from 'react-bootstrap';
import { Header } from '../components';

export default function DesignFile() {
  return (
    <div className="main-content pb-6">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} lg={10} xl={8}>
            <Header className="mt-md-5">
              <Header.Body>
                <Header.Pretitle>Documentation</Header.Pretitle>
                <Header.Title className="display-4">Design File</Header.Title>
              </Header.Body>
            </Header>
            <p>
              Dashkit was designed in{' '}
              <a href="https://www.figma.com/" target="_blank">
                Figma
              </a>
              , the best new design tool.
            </p>
            <Header className="mt-md-5">
              <Header.Body>
                <Header.Title>Why Figma?</Header.Title>
              </Header.Body>
            </Header>
            <p>
              While Figma is a relatively new design tool, it has taken the top spot in our design toolkit. Having been
              a Sketch user since it's inception, it was a big decision to switch...but we so glad we did. Here are the
              biggest benefits we've found with Figma:
            </p>
            <ul>
              <li>Performance is significantly better with large files</li>
              <li>Work on any machine and you have "the latest"</li>
              <li>Built in version history</li>
              <li>Components and shared styles are better suited for building a design system</li>
              <li>The ability to work collaboratively at the same time</li>
            </ul>
            <p>
              The only downsides we've seen are that it takes a while to get used to different shortcut keys, and
              pasting assets into files doesn't work as well. The transition is hard in the beginning, but well worth
              it.
            </p>
            <Header className="mt-md-5">
              <Header.Body>
                <Header.Title>Unofficial Figma File</Header.Title>
              </Header.Body>
            </Header>
            <p>
              Since we work pretty fluidly between Figma and actual code, we've decided it's a better investment of time
              to continue improving Dashkit over babysitting our design file. That said, we realize it can be super
              useful to have a design resource to rough out new pages or spin up component variations. To that end, we
              provide an "unofficial" Dashkit Figma file for you to play with.
            </p>
            <p>
              The file is far from perfect, and is relatively disorganized, but the type and colors systems are well
              utilized and the overall layouts are quite close to the live product. To play with design:
            </p>
            <ol className="mb-5">
              <li>
                <a href="https://www.figma.com/" target="_blank">
                  Download Figma
                </a>
              </li>
              <li>
                Open the Figma link from the <code>README.md</code>
              </li>
              <li>
                The file is "read-only", so you'll have to duplicate it! Go to your grid of documents in Figma, click
                the ellipsis icon on <code>Dashkit (Distributed)</code>, and then "Duplicate" to create an editable
                version.
              </li>
            </ol>
            <img className="img-fluid rounded-lg" src="/img/figma.jpg" alt="..." />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
