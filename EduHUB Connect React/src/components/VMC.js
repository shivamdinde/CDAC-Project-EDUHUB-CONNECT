import React from 'react';
import '../css/BGStyle.css'
import values from '../images/values.gif';
import mission from '../images/mission1.gif';
import vision from '../images/vision.gif';
import '../css/VMC.css'
import { LuAmpersand } from "react-icons/lu";

function VMC() {
    return (
        <div className='spectrum-background'>
            <section className="section border-top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 mb-4 text-center">
                            <div className="main-heading-container" style={{ animation: ' zoomInOut 2s infinite' }}>
                                <h2 className="main-heading p-3" >Believe<LuAmpersand />Become</h2>
                            </div>

                            <div className="underline mx-auto"></div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="card mb-3">
                                <img src={vision} className="card-img-top" style={{ height: '310px', objectFit: 'cover' }} alt="No Vision Image" />
                                <div className="card-body">
                                    <h5 className="card-title">Our Vision</h5>
                                    <p className="card-text" style={{ textAlign: 'justify' }}>Our vision is to lead the education technology landscape by seamlessly integrating innovation into college management, ensuring efficiency and excellence at every step. We aim to pioneer new standards, setting the benchmark for educational institutions globally.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card mb-3">
                                <img src={mission} className="card-img-top" style={{ height: '300px', objectFit: 'cover' }} alt="No Mission Image" />
                                <div className="card-body">
                                    <h5 className="card-title">Our Mission</h5>
                                    <p className="card-text" style={{ textAlign: 'justify' }}>Our mission is to revolutionize college management through cutting-edge technology, creating an environment where students and faculty thrive. We strive to provide dynamic solutions that streamline administrative processes, enhance communication, and foster collaboration within the academic community.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card mb-3">
                                <img src={values} className="card-img-top" style={{ height: '300px', objectFit: 'cover' }} alt="No Values Image" />
                                <div className="card-body">
                                    <h5 className="card-title">Our Values</h5>
                                    <p className="card-text" style={{ textAlign: 'justify' }}>Innovation, integrity, excellence, collaboration, empowerment, accountability, and continuous improvement are the cornerstones of our commitment to transformative college management. These values guide our actions, decisions, and interactions, driving us to uphold the highest standards and deliver exceptional results.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >


    );
}

export default VMC;