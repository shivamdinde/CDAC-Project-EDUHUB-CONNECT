import React from 'react';
import { Link } from 'react-router-dom';
import '../css/BGStyle.css'

function MainHeading() {
    return (
        <section className="section p-5 spectrum-background">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="main-heading">Academic in Information Technology YCP</h3>
                        <div className="underline mx-auto"></div>
                        <p style={{ textAlign: 'justify' }}>
                            <b>AIT Mumbai</b> under the wings of Centre for Development of Advanced Computing (C-DAC) Pune, established in 1999, is just a small step towards a bigger aim of providing Quality Computer Education and transforming its students into tomorrow’s professionals. It was the first Centre to be ISO 9001:2000 certified.
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            AIT has modern infrastructure including corporate standard laboratories. These are well-equipped laboratories with latest technologies and state of art infrastructure. This Centre is proud to remain associated with the best faculty in the industry for technologies and soft skills.
                        </p>
                        <Link to="/aboutus" className="btn btn-warning shadow">Read more</Link>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default MainHeading;