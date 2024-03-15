import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="spectrum-background">

        <Container className="p-4">
          <Card className=" mb-3">
            <Card.Body>
              <div className="container-fluid about-section-container">
                <div className="row about-section-text-container">
                  <div className="col-lg-12">
                    <section className="section bg-c-light border-top ">
                      <div >
                        <section className="section border-top">
                          <Container>
                            <Row className="justify-content-center">
                              <Col md={12} className="mb-4 text-center">
                                <h2>About</h2>
                                <h1 className="display-4">
                                  Academy of Information Technology (YCP) CDAC EDU-HUB
                                </h1>
                                <p className="lead" style={{ textAlign: 'justify' }}>
                                  C-DAC is a Scientific Society of the Ministry of Communications and Information Technology, Government of India. C-DAC’s Advanced Computing Training School (ACTS) is dedicated to creating high-quality manpower for the IT industry through the designing and delivery of various IT Courses. These Courses are offered through a network of Authorized Training Centres (ATCs) in India. Academy of Information Technology (YCP) is one of the most Prestigious Centres of C-DAC ACTS. AIT Mumbai under the wings of Centre for Development of Advanced Computing (C-DAC) Pune, established in 1999, is just a small step towards a bigger aim of providing Quality Computer Education and transforming its students into tomorrow’s professionals. It was the first Centre to be ISO 9001:2000 certified. AIT has modern infrastructure, including corporate standard laboratories. These are well-equipped laboratories with the latest technologies and state-of-the-art infrastructure. This Centre is proud to remain associated with the best faculty in the industry for technologies and soft skills. AIT has been conferred with the ‘Consistent Best Performance Award’ by C-DAC ACTS. The Centre is popular for the Advanced Courses, namely PG Diploma in Advanced Computing (PG-DAC) and Diploma in Advanced Computer Arts (DACA).

                                </p>
                              </Col>
                            </Row>
                          </Container>
                        </section>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>

          {/* Additional Data */}
          <Card className="mb-3">
            <Card.Body>
              <div className="work-section-wrapper">
                <div className="work-section-top">
                  <p className="primary-subheading">AIT YCP CO-ORDINATOR</p>
                  <h1 className="primary-heading">What They Are Saying</h1>
                </div>

                {/* Testimonial Section 1 */}
                <div className="testimonial-section-bottom">
                  <h2 className="font-weight-bold">Hemant Takle</h2>
                  <i>
                    <h5>Center Co-ordinator</h5>
                  </i>
                  <p style={{ textAlign: 'justify' }}>
                    Your aim must be clear from the beginning and you should follow it relentlessly. Your self-discipline is most important and you have to work hard till you reach your goal. Never lose sight of what you want to achieve. As you succeed in your goals, your confidence will increase. So remember ADC (Aim, Discipline, Confidence). All three are interconnected!!! Wishing you all success.

                  </p>
                </div>

                {/* Testimonial Section 2 */}
                <div className="testimonial-section-bottom">
                  <h2 className="font-weight-bold">Pradnya Kanojia</h2>
                  <i>
                    <h5>Course Co-ordinator</h5>
                  </i>
                  <p style={{ textAlign: 'justify' }}>
                    We are here to coordinate, organize, and facilitate you in learning and development. The Institute offers you knowledge, skills, and abilities required to enter into the information technology world. This theory works with the commitment and support of students. Both these sides go hand in hand. Keep your training aim clear and powerful, placement will come to you automatically as a by-product. We achieve DAC Diploma with every student of ours, and we get placed with every one of you. Good to experience our students rising in their career. Nothing can match this pleasure.

                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
