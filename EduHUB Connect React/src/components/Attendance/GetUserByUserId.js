import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GetUserByUserId() {
  const [attendanceData, setAttendanceData] = useState(null);
  const [userId, setUserId] = useState('');

  const getUserById = (userId) => {
    axios.get(`http://localhost:9999/attendence/user/${userId}`)
      .then(response => {
        setAttendanceData(response.data);
        toast.success('Attendance data fetched successfully');
        console.log('Attendance data:', response.data);
      })
      .catch(error => {
        console.error(error);
        toast.error('Failed to fetch attendance data');
      });
  };

  const handleInputChange = (event) => {
    setUserId(event.target.value);
  };

  const handleGetAttendance = () => {
    if (userId) {
      getUserById(userId);
    } else {
      toast.error('Please provide a User ID');
    }
  };

  return (
    <div className="App border rounded p-4 text-center">
      <h1>User By User ID Records</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control mx-auto"
          style={{ width: '50%' }}
          placeholder="Enter User ID"
          value={userId}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary ml-2" onClick={handleGetAttendance}>Get User By User ID</button>
      </div>
      <div className="mt-3">
        {attendanceData && (
          <table className="table table-bordered mx-auto" style={{ width: '50%' }}>
            <tbody>
              <tr>
                <th>User ID</th>
                <td>{attendanceData.uid}</td>
              </tr>
              <tr>
                <th>User Name</th>
                <td>{attendanceData.name}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default GetUserByUserId;
