import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddAttendanceForUser() {
  const [userId, setUserId] = useState('');
  const [dateId, setDateId] = useState('');
  const [status, setStatus] = useState('');

  const handleAddAttendance = () => {
    axios.post('http://localhost:9999/attendence/addAttendence', {
      uId: userId,
      dateId: dateId,
      status: status
    })
    .then(response => {
      console.log('Attendance added successfully:', response.data);
      toast.success('Attendance added successfully');
      // Optionally, you can handle success response here
    })
    .catch(error => {
      console.error('Error adding attendance:', error);
      toast.error('Failed to add attendance. Please try again.');
      // Optionally, you can handle error response here
    });
  };

  // Inline CSS style for spectrum background
  const spectrumBackgroundStyle = {
    background: 'rgb(197, 237, 244)',
    background: 'linear-gradient(90deg, #D7DAF2 0%, #C5EDF4 70%)',
    backgroundBlendMode: 'screen'
  };

  return (
    <div className="container mt-5 " >
      <h2 className="text-center mb-4">Add Attendance</h2>
      <div className="d-flex justify-content-center">
        <div className="border rounded p-3 bg-white" style={{ width: '50%' }}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Date ID"
              value={dateId}
              onChange={(e) => setDateId(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button className="btn btn-primary" onClick={handleAddAttendance}>Add Attendance</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddAttendanceForUser;
