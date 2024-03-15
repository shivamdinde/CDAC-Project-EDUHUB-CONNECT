import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/BGStyle.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login(event) {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8765/eduhubregistration/login", {
        email: email,
        password: password,
      });

      // Handle the login success
      const { role } = response.data; // Extract user role from the response

      // Call the onLogin function with the user's role
      onLogin(role);

      // Reset the form fields
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error(err);
      alert("Login Failed");
    }
  }

  return (
    <div>
      <Navbar />
      <div className='text-center spectrum-background ' >
        <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden '>
          <MDBRow>
            <MDBCol md='6' className='position-relative mx-auto'>
              <MDBCard className='my-5 bg-glass spectrum-background-reverse' >
                <MDBCardBody className='p-5'>
                  <div className="Auth-form-container">
                    <form className="Auth-form">
                      <div className="Auth-form-content">
                        <h3 className="Auth-form-title">LOG IN</h3>

                        <div className="mb-4">
                          <label htmlFor='floatingInput' className='form-label'>Email address</label>
                          <input type='email' className='form-control' id='floatingInput' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="mb-4">
                          <label htmlFor='floatingPassword' className='form-label'>Password</label>
                          <input type='password' className='form-control' id='floatingPassword' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <MDBBtn className='w-100 mb-2' size='md' onClick={login}>
                          Log in
                        </MDBBtn>

                        <p className="small mb-5 pb-lg-3 ms-5">
                          <a className="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </p>

                        <p className="ms-5">
                          <Link to="/registration">Don't have an account? Register here</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
