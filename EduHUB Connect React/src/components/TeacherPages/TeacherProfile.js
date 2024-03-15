import React, { useState } from "react";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { UserRole } from '../UserRole';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';

function TeacherProfile() {
  const [sName, setsName] = useState('');
  const [sEmail, setsEmail] = useState("");
  const [sMob, setsMob] = useState("");
  const [sState, setsState] = useState("");
  const [sCity, setsCity] = useState("");
  const [sPincode, setsPincode] = useState("");
  const [sRole, setsRole] = useState(UserRole.TEACHER); // Change role to TEACHER
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const formData = new FormData();
    formData.append("sName", sName);
    formData.append("sEmail", sEmail);
    formData.append("sMob", sMob);
    formData.append("sState", sState);
    formData.append("sCity", sCity);
    formData.append("sPincode", sPincode);
    formData.append("role", sRole);
    formData.append("password", password);
    if (photo) {
      formData.append("photo", photo);
    }

    try {
      await axios.put("http://localhost:9090/api/teacher/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Profile Updated Successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
    }
  };

  return (
    <MDBContainer fluid className="p-4 background-radial-gradient overflow-hidden spectrum-background">
      <MDBRow>
        <MDBCol md="10" className="position-relative mx-auto">
          <MDBCard className="my-5 bg-glass">
            <MDBCardBody >
              <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
                <h3 className="Auth-form-title">Update Teacher Profile</h3>
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  label="Full Name"
                  id="formControlLg"
                  type="text"
                  size="lg"
                  value={sName}
                  onChange={(event) => setsName(event.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  label="Email"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  value={sEmail}
                  onChange={(event) => setsEmail(event.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100 position-relative"
                  label="Password"
                  id="formControlLg"
                  type={showPassword ? "text" : "password"}
                  size="lg"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  append={
                    <button
                      className="btn btn-outline-secondary rounded-0 position-absolute end-0 translate-middle-y"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <RiEyeCloseLine /> : <RiEyeLine />}
                    </button>
                  }
                />
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100 position-relative"
                  label="Confirm Password"
                  id="formControlLg"
                  type={showConfirmPassword ? "text" : "password"}
                  size="lg"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  append={
                    <button
                      className="btn btn-outline-secondary rounded-0 position-absolute end-0 translate-middle-y"
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <RiEyeCloseLine /> : <RiEyeLine />}
                    </button>
                  }
                />
                <div className="mb-4 mx-5 w-100">
                  <label htmlFor="photoInput" className="form-label">Upload Photo</label>
                  <input
                    className="form-control"
                    type="file"
                    id="photoInput"
                    onChange={handlePhotoChange}
                  />
                </div>
                {photo && (
                  <div className="card position-absolute top-0 end-0" style={{ width: "100px" }}>
                    <img src={URL.createObjectURL(photo)} className="card-img-top" alt="Uploaded" />
                  </div>
                )}
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  label="Mobile Number"
                  id="formControlLg"
                  type="text"
                  size="lg"
                  value={sMob}
                  onChange={(event) => setsMob(event.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  label="State"
                  id="formControlLg"
                  type="text"
                  size="lg"
                  value={sState}
                  onChange={(event) => setsState(event.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  label="City"
                  id="formControlLg"
                  type="text"
                  size="lg"
                  value={sCity}
                  onChange={(event) => setsCity(event.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  label="Pincode"
                  id="formControlLg"
                  type="text"
                  size="lg"
                  value={sPincode}
                  onChange={(event) => setsPincode(event.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  label="Selected Role"
                  id="formControlLg"
                  type="text"
                  size="lg"
                  value="Teacher" // Set the value to "Teacher"
                  readOnly
                />
                <MDBBtn className="mb-4 px-5 mx-5 w-100" color="info" size="lg" onClick={handleSubmit}>
                  Update Profile
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default TeacherProfile;
