import React, { useState } from "react";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from "mdb-react-ui-kit";

function StudentAssignment() {
  const [assignmentTitle, setAssignmentTitle] = useState('');
  const [assignmentDescription, setAssignmentDescription] = useState("");
  const [submissionFile, setSubmissionFile] = useState(null);

  const handleFileChange = (event) => {
    setSubmissionFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a FormData object to store form data
    const formData = new FormData();
    formData.append("assignmentTitle", assignmentTitle);
    formData.append("assignmentDescription", assignmentDescription);
    if (submissionFile) {
      formData.append("submissionFile", submissionFile);
    }

    try {
      // Send a POST request with Axios
      await axios.post("http://localhost:9090/api/assignment/submit", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Assignment submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to submit assignment.");
    }
  };

  return (
    <MDBContainer fluid className="p-4 background-radial-gradient overflow-hidden spectrum-background">
      <MDBRow>
        <MDBCol md="8" className="position-relative mx-auto">
          <MDBCard className="my-5 bg-glass">
            <MDBCardBody>
              <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
                <h3 className="Auth-form-title">Assignment Submission</h3>
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  label="Assignment Title"
                  id="assignmentTitle"
                  type="text"
                  size="lg"
                  value={assignmentTitle}
                  onChange={(event) => setAssignmentTitle(event.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  label="Assignment Description"
                  id="assignmentDescription"
                  type="textarea"
                  size="lg"
                  rows={5}
                  value={assignmentDescription}
                  onChange={(event) => setAssignmentDescription(event.target.value)}
                />
                <div className="mb-4 mx-5 w-100">
                  <label htmlFor="fileInput" className="form-label">Upload Submission File</label>
                  <input
                    className="form-control"
                    type="file"
                    id="fileInput"
                    onChange={handleFileChange}
                  />
                </div>
                <MDBBtn className="mb-4 px-5 mx-5 w-100" color="info" size="lg" onClick={handleSubmit}>
                  Submit Assignment
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default StudentAssignment;
