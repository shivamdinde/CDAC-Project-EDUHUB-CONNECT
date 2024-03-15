import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GetAttendenceByDayType() {
  const [attendanceData, setAttendanceData] = useState([]);
  const [type, setType] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const findByDayType = (type) => {
    setLoading(true);
    setError(null);
    axios.get(`http://localhost:9999/attendence/Day/${type}`)
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
    setType(event.target.value);
  };

  const handleGetAttendance = () => {
    if (type.trim() !== '') {
      findByDayType(type);
    } else {
      toast.error('Please enter a valid day type.');
    }
  };

  const renderTableRows = () => {
    return attendanceData.map((attendanceItem, index) => (
      <tr key={index}>
        <td>{attendanceItem.user?.uId}</td>
        <td>{attendanceItem.user?.name}</td>
        <td>{attendanceItem.courseDate?.dateId}</td>
        <td>{attendanceItem.courseDate?.dateType}</td>
        <td>{attendanceItem.courseDate?.dateremark}</td>
        <td>{attendanceItem.courseDate?.ddate}</td>
        <td>{attendanceItem.status}</td>
        <td>{attendanceItem.aid}</td>
      </tr>
    ));
  };

  return (
    <div className="App border rounded p-4">
      <h1 className="text-center">Attendance Records By Day Type</h1>
      <div className="text-center mb-3">
        <input
          type="text"
          className="form-control mx-auto"
          style={{ width: '50%' }}
          placeholder="Enter Day Type"
          value={type}
          onChange={handleInputChange}
        /><br/>
        <button className="btn btn-primary ml-2" onClick={handleGetAttendance}>Get Attendance By Day Type</button>
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
                <th>User Id</th>
                <th>User Name</th>
                <th>Date Id</th>
                <th>Date Type</th>
                <th>Date Remark</th>
                <th>Date</th>
                <th>Status</th>
                <th>Attendance Id</th>
              </tr>
            </thead>
            <tbody>
              {renderTableRows()}
            </tbody>
          </table>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default GetAttendenceByDayType;
