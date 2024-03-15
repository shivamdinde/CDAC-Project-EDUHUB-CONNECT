import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { BsGeoAlt, BsEnvelope, BsPhone } from "react-icons/bs";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const ContactUs = () => {
  return (
    <div>
      <Navbar/>
      <div className="contact-us-container p-2 spectrum-background">
        <Container>
          <Row>
            <Col md={6}>
              <Card className="mb-3 h-100">
                <Card.Body>
                  <h2>Contact Us</h2>
                  <p style={{ textAlign: 'justify' }}>
                    Give us a call or drop by anytime, we endeavour to answer all inquiries within 24 hours on Working days. We are open from 10.00 AM to 05.00 PM on weekdays.
                  </p>

                  <p>
                    <BsGeoAlt /> <strong>Academy of Information Technology</strong>
                    <br />
                    <strong>
                      Address: 5th Floor YB Chavan Center, Jagannath Bhosale Marg opposite
                      Mantralaya, Nariman Point, Mumbai 400021
                    </strong>
                  </p>

                  <p>
                    <BsEnvelope /> <strong>Email:</strong> aitycpmumbai@gmail.com
                  </p>

                  <p>
                    <BsPhone /> <strong>Mobile No:</strong> 9769256343 / 9892904458
                    <br />
                    <strong>Telephone No:</strong> 02222817975 / 02222817976
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="mb-3 h-100">
                <Card.Body>
                  {/* Google Maps Embed API */}
                  <iframe
                    title="Google Maps"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.145573694433!2d72.82394897394684!3d18.92494955669958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e9f504be77%3A0x730fa90710fff568!2sYashwantrao%20Chavan%20Centre!5e0!3m2!1sen!2sin!4v1707846771202!5m2!1sen!2sin"
                    allowFullScreen
                  ></iframe>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Contact Form */}
          <Row className="mt-3">
            <Col>
              <Card className="mb-3">
                <Card.Body>
                  <h2>Send us a message</h2>
                  <Form>

                    <Col>

                      <Form>
                        <Form.Group controlId="formName" className="p-2">
                          <Form.Label>Name</Form.Label>
                          <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="p-2">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="Your Email" />
                        </Form.Group>

                        <Form.Group controlId="formMessage" className="p-2">
                          <Form.Label>Message</Form.Label>
                          <Form.Control as="textarea" rows={4} placeholder="Your Message" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </Form>
                    </Col>


                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
