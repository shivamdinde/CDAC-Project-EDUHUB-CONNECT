import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PlacementLogo from '../images/companyplacements.jpg';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Placements = () => {
  return (
    <div>
      <Navbar/>
    <div className="placements-container spectrum-background ">
      <Container>
        <Row>
          <Col className="text-center">
            <h2>Placement Support</h2>
            <p>
              Salary offered by companies for a fresher ranges from Rs. 3 LPA to Rs. 10 LPA. Provided to the students through a common campus placement program.
            </p>
            <p>
              <strong>Our Recruiters: C-DAC Mumbai Region</strong>
            </p>
          </Col>
        </Row>

        {/* Image */}
        <Row className="justify-content-center">
          <Col md={8}>
            <img src={PlacementLogo} alt="Company Placements" className="img-fluid" />
          </Col>
        </Row>

        {/* Footer */}
        <footer className="mt-5 text-center">
          
          <p>&copy; Powered By EduHub (ALUMNI SEPT-23 Batch)</p>
        </footer>
      </Container>
    </div>
    <Footer />
    </div>
  );
};

export default Placements;
