import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { companies } from '../data';
import { CRMCompaniesCards, CRMCompaniesHeader, CRMCompaniesTable } from '../widgets';

export default function CRMCompanies() {
  const [activeTab, setActiveTab] = useState(0);

  const pagesOptions = [
    { value: 5, label: '5 per page' },
    { value: 10, label: '10 per page' },
    { value: -1, label: 'All' },
  ];

  const titleOptions = [
    { value: '*', label: 'Any' },
    { value: 'designer', label: 'Designer' },
    { value: 'developer', label: 'Developer' },
    { value: 'owner', label: 'Owner' },
    { value: 'founder', label: 'Founder' },
  ];

  const leadScoreOptions = [
    { value: '-1', label: 'Any' },
    { value: '1', label: '1+' },
    { value: '2', label: '2+' },
    { value: '3', label: '3+' },
    { value: '4', label: '4+' },
    { value: '5', label: '5+' },
    { value: '6', label: '6+' },
    { value: '7', label: '7+' },
    { value: '8', label: '8+' },
    { value: '9', label: '9+' },
    { value: '10', label: '10' },
  ];

  return (
    <div className="main-content">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12}>
            <CRMCompaniesHeader activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === 0 && (
              <CRMCompaniesTable
                companies={companies}
                leadScoreOptions={leadScoreOptions}
                pagesOptions={pagesOptions}
                titleOptions={titleOptions}
              />
            )}
            {activeTab === 1 && (
              <CRMCompaniesCards
                companies={companies}
                leadScoreOptions={leadScoreOptions}
                pagesOptions={pagesOptions}
                titleOptions={titleOptions}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
