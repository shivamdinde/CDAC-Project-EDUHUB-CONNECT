import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from "mdb-react-ui-kit";
import { FaUserCheck, FaUserTimes } from 'react-icons/fa';
import '../css/Attendance.css'; 

function Attendance() {
  const [attendanceList, setAttendanceList] = useState(new Array(66).fill("absent"));

  const handleAttendance = (index) => {
    const newAttendanceList = [...attendanceList];
    newAttendanceList[index] = newAttendanceList[index] === "present" ? "absent" : "present";
    setAttendanceList(newAttendanceList);
  };

  return (
    <MDBContainer fluid className="p-4 background-radial-gradient overflow-hidden spectrum-background">
      <MDBRow>
        <MDBCol md="10" className="position-relative mx-auto">
          <MDBCard className="my-5 bg-glass">
            <MDBCardBody>
              <div className="attendance-container">
                <h3 className="attendance-title">Attendance Page</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Student ID</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attendanceList.map((status, index) => (
                        <tr key={index}>
                          <td>Student {index + 1}</td>
                          <td>{status}</td>
                          <td>
                            <MDBBtn
                              color={status === "present" ? "danger" : "success"}
                              size="sm"
                              onClick={() => handleAttendance(index)}
                            >
                              {status === "present" ? <FaUserTimes /> : <FaUserCheck />}
                            </MDBBtn>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Attendance;
