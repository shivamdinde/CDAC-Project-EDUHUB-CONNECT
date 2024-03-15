import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GetAllAttendance() {
  const [attendanceData, setAttendanceData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAttendanceData = () => {
    setLoading(true);
    axios.get(`http://localhost:9999/attendence/`)
      .then(response => {
        setAttendanceData(response.data);
        toast.success('Attendance data fetched successfully!');
        console.log('Attendance data:', response.data);
      })
      .catch(error => {
        console.error(error);
        toast.error('Failed to fetch attendance data. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGetAllAttendance = () => {
    fetchAttendanceData();
  };

  return (
    <div className="container mt-5 bg-white">
      <h1 className="text-center mb-4">All Attendance Records</h1>

      <div className="text-center mb-4">
        <button className="btn btn-primary" onClick={handleGetAllAttendance} disabled={loading}>
          {loading ? 'Loading...' : 'Get All Attendance'}
        </button>
      </div>

      {attendanceData ? (
        <table className="table">
          <thead>
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
            {attendanceData.map((attendanceItem, index) => (
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
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center">{loading ? 'Loading...' : 'No data available.'}</div>
      )}
      <ToastContainer />
    </div>
  );
}

export default GetAllAttendance;
