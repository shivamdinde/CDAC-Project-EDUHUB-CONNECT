import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { BsGeoAlt, BsEnvelope, BsPhone } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
    return (

        <section className="section footer text-dark" style={{
            background: 'rgb(197, 237, 244)',
            background: 'linear-gradient(90deg, #acaec1 0%, #9dbdc3 70%)',
            backgroundBlendMode: 'screen'
        }}>
            <div className="container">
                <div className="row p-4">
                    <div className="col-md-4">
                        <h6 style={{ fontWeight: 'bold', textAlign: 'center' }}>Institute Information</h6>
                        <hr />
                        <p style={{ textAlign: 'justify' }}>
                            AIT YCP C-DAC, situated in Mumbai's Nariman Point, shines as a distinguished hub in the educational landscape. Renowned for its advanced computing programs, it offers industry-aligned curriculum and state-of-the-art facilities, nurturing future technology leaders equipped for success in the Dynamic Education Sector.
                        </p>
                    </div>
                    <div className="col-md-4 text-dark">
                        <h6 style={{ fontWeight: 'bold', textAlign: 'center' }}>Contact Information</h6>
                        <hr />
                        <p style={{ textAlign: 'justify' }}>
                            <BsGeoAlt /> <strong>Academy of Information Technology</strong>
                            <br />
                            <strong>
                                Address: 5th Floor YB Chavan Center, Jagannath Bhosale Marg opposite
                                Mantralaya, Nariman Point, Mumbai 400021
                            </strong>
                        </p>

                        <p style={{ textAlign: 'justify' }}>
                            <BsEnvelope /> <strong>Email:</strong> aitycpmumbai@gmail.com
                        </p>

                        <p style={{ textAlign: 'justify' }}>
                            <BsPhone /> <strong>Mobile No:</strong> 9769256343 / 9892904458
                            <br />
                            <strong>Telephone No:</strong> 02222817975 / 02222817976
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6 style={{ fontWeight: 'bold', textAlign: 'center' }}>Quick Links</h6>
                        <hr />
                        <div className='text-center'><b><Link className='text-dark' to="/">Home</Link></b></div>
                        <strong><div className='text-center'><Link className='text-dark' to="/WhyUs">WhyUs</Link></div></strong>
                        <strong><div className='text-center'><Link className='text-dark' to="/aboutus">About</Link></div></strong>
                        <strong><div className='text-center'><Link className='text-dark' to="/contactus">Contact</Link></div></strong>
                        <strong><div className='text-center'><Link className='text-dark' to="/studenthome">StudentHome</Link></div></strong>
                        <strong><div className='text-center'><Link className='text-dark' to="/teacherhome">TeacherHome</Link></div></strong>
                        <strong><div className='text-center'><Link className='text-dark' to="/adminhome">AdminHome</Link></div></strong>
                        <strong><div className='text-center'><Link className='text-dark' to="/staffhome">StaffHome</Link></div></strong>
                        <strong><div className='text-center'><Link className='text-dark' to="/Feedback">Feedback</Link></div></strong>
                    </div>
                    <hr />
                    <div className="footer-section-one"></div>
                    <div className="footer-icons mx-2">
                        <a href="https://twitter.com/cdacindia/status/1557217278600417282?lang=en" className='mx-1'><BsTwitter /></a>
                        <a className='mx-1' href="https://in.linkedin.com/company/cdacindia"><SiLinkedin /></a>
                        <a className='mx-1' href="https://www.youtube.com/@CDACOfficial/videos"><BsYoutube /></a>
                        <a className='mx-1' href="https://www.facebook.com/groups/283529599932/"><FaFacebookF /></a>
                    </div>

                    <p style={{ textAlign: 'center' }}>© 2023 Academy of Information Technology (YCP) All Rights Reserved. T&C | Privacy</p>
                </div>
            </div>
        </section>

    );
}
export default Footer;