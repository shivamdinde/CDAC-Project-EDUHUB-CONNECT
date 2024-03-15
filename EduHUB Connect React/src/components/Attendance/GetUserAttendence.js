import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetUserAttendance() {
  const [attendanceData, setAttendanceData] = useState(null);
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAttendanceByUserId = (userId) => {
    axios.get(`http://localhost:9999/attendence/allattendence/user/${userId}`)
      .then(response => {
        setAttendanceData(response.data);
        console.log('Attendance data:', response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setError(error);
        setLoading(false);
      });
  };

  const handleInputChange = (event) => {
    setUserId(event.target.value);
  };

  const handleGetAttendance = () => {
    setLoading(true); // Set loading state when fetching new data
    setError(null); // Reset error state
    if (userId) {
      getAttendanceByUserId(userId);
    } else {
      setError('Please provide a User ID');
      setLoading(false); // Set loading state to false if no user ID is provided
    }
  };

  // Render the table for attendance data
  const renderTable = () => {
    return (
      <table className="table table-bordered" style={{ width: '50%', margin: 'auto' }}>
        <thead className="thead-light">
          <tr>
            <th>User Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((attendanceItem, index) => (
            <tr key={index}>
              <td>{attendanceItem.user?.name}</td>
              <td>{attendanceItem.courseDate?.ddate}</td>
              <td>{attendanceItem.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="App border rounded p-4">
      <h1 className="text-center">User By User ID Records</h1>
      <div className="text-center mb-3">
        <input
          type="text"
          className="form-control mx-auto"
          style={{ width: '50%' }}
          placeholder="Enter User ID"
          value={userId}
          onChange={handleInputChange}
        /><br/>
        <button className="btn btn-primary ml-2" onClick={handleGetAttendance}>Get User By User ID</button>
      </div>

      <div className="mt-3">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          // Render the table
          renderTable()
        )}
      </div>
    </div>
  );
}

export default GetUserAttendance;
