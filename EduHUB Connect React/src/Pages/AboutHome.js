import React from 'react';
import { Link } from 'react-router-dom';
function AboutHome() {
    return (
        <div>

            <section className="section p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Academic in Information Technology YCP</h3>
                            <div className="underline mx-auto"></div>
                            <p style={{ textAlign: 'justify' }}>
                                The <b>Academy of Information Technology (YCC)</b> is a prestigious center under C-DAC’s Advanced Computing Training School (ACTS), focusing on delivering high-quality IT courses through a network of Authorized Training Centers (ATCs) in India. AIT Mumbai, established in 1999 under the auspices of C-DAC Pune, aims to provide top-notch computer education, certified under ISO 9001:2000. Equipped with modern infrastructure and corporate-standard laboratories, AIT boasts industry-leading faculty for both technology and soft skills training. Recognized for its excellence, AIT has received the 'Consistent Best Performance Award' from C-DAC ACTS and is renowned for its advanced courses like PG Diploma in Advanced Computing (PG-DAC) and Diploma in Advanced Computer Arts (DACA).
                            </p>
                            <Link to="/aboutus" className="btn btn-warning shadow">Read more</Link>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}
export default AboutHome;