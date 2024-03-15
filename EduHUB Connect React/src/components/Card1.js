import React from 'react';
import P1 from '../images/modern_infrastructure.gif';
import P2 from '../images/specialized_courses.gif';
import P3 from '../images/placement_assistance.gif';
import P4 from '../images/industry.gif';
import P5 from '../images/experienced_faculty.gif';
import P6 from '../images/hands_on_learning.gif';
import P7 from '../images/career_Opportunities.gif';
import P8 from '../images/career_Opportunities1.gif';

import { Link } from 'react-router-dom';

function Card1() {
    const str = "Modern Infrastructure";
    const formattedStr = str.replace("h", "h " + "\u00A0".repeat(40));
    const str2 = "Specialized Courses";
    const formattedStr2 = str2.replace("g", "g " + "\u00A0".repeat(40));
    const str3 = "Placement Assistance";
    const formattedStr3 = str3.replace("ces", "ces " + "\u00A0".repeat(32));
    const str4 = "Industry";
    const formattedStr4 = str4.replace("h", "h " + "\u00A0".repeat(40));
    const str5 = "Experienced Faculty";
    const formattedStr5 = str5.replace("ces", "ces " + "\u00A0".repeat(32));
    const str6 = "Hands on Learning";
    const formattedStr6 = str6.replace("g", "g " + "\u00A0".repeat(40));
    const str7 = "Career Opportunities";
    const formattedStr7 = str7.replace("ces", "ces " + "\u00A0".repeat(32));
    return (
        <>
            <section className="section bg-c-light border-top spectrum-background">
                <div className='spectrum-background'>
                    <section className="section border-top">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-12 mb-4 text-center">
                                    <strong><h2 className="main-heading">Our Services</h2></strong>
                                    <div className="underline mx-auto"></div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-md-4 p-4">
                                    <div className="card shadow card-img-top" >
                                        <img src={P1} className="w-100 border-bottom" alt="Services" style={{ height: '200px' }} />
                                        <div className="card-body ">
                                            <h6>{formattedStr}</h6>
                                            <div className="underline"></div>
                                            <p>Modern infrastructure signifies the contemporary framework of facilities and systems supporting societal needs and advancements. It encompasses advanced technologies, sustainable practices, and efficient resources to enhance living standards, economic growth, and connectivity, ensuring resilience and adaptability to evolving demands and challenges in our dynamic world.</p>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 p-4">
                                    <div className="card shadow card-img-top" >
                                        <img src={P2} className="w-100 border-bottom" alt="Services" style={{ height: '200px' }} />
                                        <div className="card-body ">
                                            <h6>{formattedStr2}</h6>
                                            <div className="underline"></div>
                                            <p>Specialized courses offer targeted education in niche areas, providing in-depth knowledge and skills tailored to specific industries or disciplines. These programs focus on honing expertise, fostering innovation, and preparing individuals for specialized roles, ensuring they meet the unique demands and more amd more challenges of their chosen field.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 p-4">
                                    <div className="card shadow card-img-top" >
                                        <img src={P3} className="w-100 border-bottom" alt="Services" style={{ height: '200px' }} />
                                        <div className="card-body ">
                                            <h6>{formattedStr3}</h6>
                                            <div className="underline"></div>
                                            <p>Placement assistance entails support services offered to students and job seekers to facilitate their transition from education to employment. This includes career counseling, resume building, interview preparation, and connecting individuals with job opportunities through partnerships with companies, ultimately aiming to enhance their employability and secure fulfilling careers.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 p-4">
                                    <div className="card shadow card-img-top" >
                                        <img src={P4} className="w-100 border-bottom" alt="Services" style={{ height: '200px' }} />
                                        <div className="card-body ">
                                            <h6>{formattedStr4}</h6>
                                            <div className="underline"></div>
                                            <p>In C-DAC, the term 'industry' encompasses various sectors and domains where the organization's expertise and technologies are applied. This includes IT, telecommunications, healthcare, finance, and more. C-DAC collaborates with industry partners to address technological challenges, develop innovative solutions, and drive digital transformation across sectors.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 p-4">
                                    <div className="card shadow card-img-top" >
                                        <img src={P5} className="w-100 border-bottom" alt="Services" style={{ height: '200px' }} />
                                        <div className="card-body ">
                                            <h6>{formattedStr5}</h6>
                                            <div className="underline"></div>
                                            <p>At C-DAC, experienced faculty members bring a wealth of knowledge and expertise to the forefront of education and research. With extensive industry experience and academic credentials, they mentor and guide students, imparting practical insights and fostering innovation in cutting-edge technologies, ensuring a dynamic learning environment.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 p-4">
                                    <div className="card shadow card-img-top" >
                                        <img src={P6} className="w-100 border-bottom" alt="Services" style={{ height: '200px' }} />
                                        <div className="card-body ">
                                            <h6>{formattedStr6}</h6>
                                            <div className="underline"></div>
                                            <p>In C-DAC, hands-on learning forms the cornerstone of education, empowering students with practical skills and real-world experience. Through immersive workshops, lab sessions, and projects, learners actively engage with industry-relevant technologies and tools, fostering critical thinking, and preparing them for successful careers in the digital landscape.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </section>
        </>

    );
}
export default Card1;
