import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/BGStyle.css';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import { useEffect, useState } from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { UserRole } from './UserRole';
import { Dropdown } from 'react-bootstrap';

function StudentRegistration() {
  const [email, setsemail] = useState("");
  const [fullName, setsfullName] = useState('');
  const [userName, setsuserName] = useState('');
  const [password, setspassword] = useState("");
  const [phoneNo, setsphoneNo] = useState("");
  const [state, setsstate] = useState("");
  const [city, setscity] = useState("");
  const [pincode, setspincode] = useState("");
  const [role, setsrole] = useState(UserRole.STUDENT);

  async function save(event) {
    event.preventDefault();
    try {
      const backendServiceUrl = await fetchBackendServiceUrl(); // Fetch backend service URL from Eureka
      await axios.post(`${backendServiceUrl}/registration/user/save`, {  // Adjusted endpoint URL
        email: email,
        fullName: fullName,
        userName: userName,
        password: password,
        phoneNo: phoneNo,
        state: state,
        city: city,
        pincode: pincode,
        role: role
      });
      alert("User Registration Successful");
      // Reset form fields
      setsfullName("");
      setsuserName("");
      setspassword("");
      setsemail("");
      setsphoneNo("");
      setsstate("");
      setscity("");
      setspincode("");
      setsrole("");
    } catch (err) {
      console.error(err);
      alert("User Registration Failed");
    }
  }

  async function fetchBackendServiceUrl() {
    // You need to implement a logic to fetch the backend service URL from Eureka
    // This can be done using a library like EurekaJS or by making a direct HTTP request to Eureka server's API
    // For demonstration, I'll provide a static URL here
    return "http://localhost:8765"; // Adjust this URL according to your setup
  }

  return (
    <div>
      <Navbar />
      <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden spectrum-background'>
        <MDBRow>
          <MDBCol md='6' className='position-relative mx-auto '>
            <MDBCard className='my-5 bg-glass '>
              <MDBCardBody className='p-5'>
                <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                  <h3 className="Auth-form-title "> Register</h3>
               
                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    label='Full Name'
                    id='formControlLg'
                    type='text'
                    size='lg'
                    value={fullName}
                    onChange={(event) => setsfullName(event.target.value)}
                  />
                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    label='UserName'
                    id='formControlLg'
                    type='text'
                    size='lg'
                    value={userName}
                    onChange={(event) => setsuserName(event.target.value)}
                  />

                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    label='Password'
                    id='formControlLg'
                    type='password'
                    size='lg'
                    value={password}
                    onChange={(event) => setspassword(event.target.value)}
                  />

                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    label='Email'
                    id='formControlLg'
                    type='email'
                    size='lg'
                    value={email}
                    onChange={(event) => setsemail(event.target.value)}
                  />

                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    label='Mobile Number'
                    id='formControlLg'
                    type='text'
                    size='lg'
                    value={phoneNo}
                    onChange={(event) => setsphoneNo(event.target.value)}
                  />
                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    label='State'
                    id='formControlLg'
                    type='text'
                    size='lg'
                    value={state}
                    onChange={(event) => setsstate(event.target.value)}
                  />

                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    label='City'
                    id='formControlLg'
                    type='text'
                    size='lg'
                    value={city}
                    onChange={(event) => setscity(event.target.value)}
                  />

                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    label='Pincode'
                    id='formControlLg'
                    type='text'
                    size='lg'
                    value={pincode}
                    onChange={(event) => setspincode(event.target.value)}
                  />

                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    label='Selected Role'
                    id='formControlLg'
                    type='text'
                    size='lg'
                    value={role}
                    readOnly
                  />

                  <Dropdown className="mb-4 mx-5 w-100">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Select Role
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => setsrole(UserRole.ADMIN)}>Admin</Dropdown.Item>
                      <Dropdown.Item onClick={() => setsrole(UserRole.STUDENT)}>Student</Dropdown.Item>
                      <Dropdown.Item onClick={() => setsrole(UserRole.TEACHER)}>Teacher</Dropdown.Item>
                      <Dropdown.Item onClick={() => setsrole(UserRole.STAFF)}>Staff</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>


                  
                
                  <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg' onClick={save}>
                    Register
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </div>
  );
}

export default StudentRegistration;
