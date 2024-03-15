import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GetAttendenceByDate() {
  const [attendanceData, setAttendanceData] = useState([]);
  const [dDate, setdDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const findByDate = (dDate) => {
    setLoading(true);
    setError(null);
    axios.get(`http://localhost:9999/attendence/${dDate}`)
      .then(response => {
        setAttendanceData(response.data);
        toast.success('Attendance data fetched successfully!');
        console.log('Attendance data:', response.data);
      })
      .catch(error => {
        console.error(error);
        setError(error);
        toast.error('Failed to fetch attendance data. Please try again.');
      })
      .finally(() => setLoading(false));
  };

  const handleInputChange = (event) => {
    setdDate(event.target.value);
  };

  const handleGetAttendance = () => {
    if (dDate) {
      findByDate(dDate);
    } else {
      toast.error('Please select a valid date.');
    }
  };

  return (
    <div className="App border rounded p-4">
      <h1 className="text-center">Date Attendance Records</h1>
      <div className="text-center mb-3">
        <input
          type="date"
          format="yyyy-mm-dd"
          className="form-control mx-auto"
          style={{ width: '50%' }}
          placeholder="Enter Date"
          value={dDate}
          onChange={handleInputChange}
        /><br/>
        <button className="btn btn-primary ml-2" onClick={handleGetAttendance}>Get Attendance By Date</button>
      </div>

      <div className="mt-3">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <table className="table table-bordered" style={{ width: '50%', margin: 'auto' }}>
            <thead className="thead-light">
              <tr>
                <th>User Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((record, index) => (
                <tr key={index}>
                  <td>{record.user.name}</td>
                  <td>{record.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default GetAttendenceByDate;
