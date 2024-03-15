import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/BGStyle.css'
import axios from 'axios';
import { useEffect, useState } from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { UserRole } from './UserRole';
import { Dropdown } from 'react-bootstrap';


function StudentRegistration() {

  const [sName, setsName] = useState('');
  const [sUserName, setsUserName] = useState('');
  const [sPass, setsPass] = useState("");
  const [sEmail, setsEmail] = useState("");
  const [sMob, setsMob] = useState("");
  const [sState, setsState] = useState("");
  const [sCity, setsCity] = useState("");
  const [sPincode, setsPincode] = useState("");
  const [sRole, setsRole] = useState(UserRole.STUDENT);


  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:9090/api/student/save",
        {

          sName: sName,
          sUserName: sUserName,
          sPass: sPass,
          sEmail: sEmail,
          sMob: sMob,
          sState: sState,
          sCity: sCity,
          sPincode: sPincode,
          role: sRole

        });
      alert("User Registation Successfully");

      setsName("");
      setsUserName("");
      setsPass("");
      setsEmail("");
      setsMob("");
      setsState("");
      setsCity("");
      setsPincode("");
    }
    catch (err) {
      console.log(err);
      alert("User Registration Failed")
    }
  }

  return (

    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden spectrum-background'>
      <MDBRow>

        <MDBCol md='6' className='position-relative mx-auto '>
          <MDBCard className='my-5 bg-glass '>
            <MDBCardBody className='p-5 spectrum-background-reverse2'>
              <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                <h3 className="Auth-form-title "> Register</h3>
                <MDBInput
                  wrapperClass='mb-4 mx-5 w-100'
                  label='Full Name'
                  id='formControlLg'
                  type='text'
                  size='lg'
                  value={sName}
                  onChange={(event) => setsName(event.target.value)}
                />
                <MDBInput
                  wrapperClass='mb-4 mx-5 w-100'
                  label='UserName'
                  id='formControlLg'
                  type='text'
                  size='lg'
                  value={sUserName}
                  onChange={(event) => setsUserName(event.target.value)}
                />

                <MDBInput
                  wrapperClass='mb-4 mx-5 w-100'
                  label='Password'
                  id='formControlLg'
                  type='password'
                  size='lg'
                  value={sPass}
                  onChange={(event) => setsPass(event.target.value)}
                />

                <MDBInput
                  wrapperClass='mb-4 mx-5 w-100'
                  label='Email'
                  id='formControlLg'
                  type='email'
                  size='lg'
                  value={sEmail}
                  onChange={(event) => setsEmail(event.target.value)}
                />

                <MDBInput
                  wrapperClass='mb-4 mx-5 w-100'
                  label='Mobile Number'
                  id='formControlLg'
                  type='text'
                  size='lg'
                  value={sMob}
                  onChange={(event) => setsMob(event.target.value)}
                />
                <MDBInput
                  wrapperClass='mb-4 mx-5 w-100'
                  label='State'
                  id='formControlLg'
                  type='text'
                  size='lg'
                  value={sState}
                  onChange={(event) => setsState(event.target.value)}
                />

                <MDBInput
                  wrapperClass='mb-4 mx-5 w-100'
                  label='City'
                  id='formControlLg'
                  type='text'
                  size='lg'
                  value={sCity}
                  onChange={(event) => setsCity(event.target.value)}
                />

                <MDBInput
                  wrapperClass='mb-4 mx-5 w-100'
                  label='Pincode'
                  id='formControlLg'
                  type='text'
                  size='lg'
                  value={sPincode}
                  onChange={(event) => setsPincode(event.target.value)}
                />

                <MDBInput
                  wrapperClass='mb-4 mx-5 w-100'
                  label='Selected Role'
                  id='formControlLg'
                  type='text'
                  size='lg'
                  value={sRole}
                  readOnly
                />

                <Dropdown className="mb-4 mx-5 w-100">
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select Role
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setsRole(UserRole.ADMIN)}>Admin</Dropdown.Item>
                    <Dropdown.Item onClick={() => setsRole(UserRole.STUDENT)}>Student</Dropdown.Item>
                    <Dropdown.Item onClick={() => setsRole(UserRole.TEACHER)}>Teacher</Dropdown.Item>
                    <Dropdown.Item onClick={() => setsRole(UserRole.STAFF)}>Staff</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>


                <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg' onClick={save}>
                  Register
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
            alt="Login image"
            className="w-100"
            style={{ objectFit: 'cover', objectPosition: 'left' }}
          />
        </MDBCol> */}
      </MDBRow>
    </MDBContainer>
  );
}

export default StudentRegistration;