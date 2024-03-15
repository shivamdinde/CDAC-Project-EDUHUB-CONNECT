import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarShort from '../NavbarShort'; // Import the NavbarShort component
import { FaUser } from 'react-icons/fa'; // Import FaUser icon
import AdminProfile from './AdminProfile';
import AdminAssignment from './AdminAssignment';
import Syllabus from '../StudentPages/Syllabus';
import AddAttendanceForUser from '../Attendance/AddAttendanceForUser';

function AdminHome() {
  // Define state to manage active content
  const [activeContent, setActiveContent] = useState('profile');

  // Define handleLogout function
  const handleLogout = () => {
    // Add logout logic here
    console.log('Logout clicked');
  };

  // Function to handle click on navigation links
  const handleNavigation = (content) => {
    setActiveContent(content);
  };

  return (
    <div style={{ height: '100vh' }}>
      <NavbarShort userName="John Doe" userIcon={<FaUser />} onLogout={handleLogout} />
      <div className="container-fluid h-100 ">
        <div className="row h-100">
          <div className="col-md-2 col-sm-12">
            <div className="d-flex flex-column gap-2 text-center rounded p-3 h-100">
              <Link to="#simple-list-item-0" className={`btn btn-outline-primary rounded-pill ${activeContent === 'profile' ? 'active' : ''}`} onClick={() => handleNavigation('profile')}>
                Profile
              </Link>
              <Link to="#simple-list-item-1" className={`btn btn-outline-primary rounded-pill ${activeContent === 'profile_update' ? 'active' : ''}`} onClick={() => handleNavigation('profile_update')}>
                Profile Update
              </Link>
              <Link to="#simple-list-item-2" className={`btn btn-outline-primary rounded-pill ${activeContent === 'item2' ? 'active' : ''}`} onClick={() => handleNavigation('item2')}>
                Admin Assignment
              </Link>
              <Link to="#simple-list-item-3" className={`btn btn-outline-primary rounded-pill ${activeContent === 'item3' ? 'active' : ''}`} onClick={() => handleNavigation('item3')}>
                Admin Attendance
              </Link>
              <Link to="#simple-list-item-4" className={`btn btn-outline-primary rounded-pill ${activeContent === 'item4' ? 'active' : ''}`} onClick={() => handleNavigation('item4')}>
                Exam
              </Link>
              <Link to="#simple-list-item-5" className={`btn btn-outline-primary rounded-pill ${activeContent === 'item5' ? 'active' : ''}`} onClick={() => handleNavigation('item5')}>
                PG Dac Syllabus
              </Link>
              <Link to="#simple-list-item-6" className={`btn btn-outline-primary rounded-pill ${activeContent === 'item6' ? 'active' : ''}`} onClick={() => handleNavigation('item6')}>
                Quiz
              </Link>
              <Link to="#simple-list-item-6" className={`btn btn-outline-primary rounded-pill ${activeContent === 'item7' ? 'active' : ''}`} onClick={() => handleNavigation('item7')}>
                Class Schedule
              </Link>
              <Link to="#simple-list-item-6" className={`btn btn-outline-primary rounded-pill ${activeContent === 'item8' ? 'active' : ''}`} onClick={() => handleNavigation('item8')}>
                Feedback Complain
              </Link>
              <Link to="#simple-list-item-6" className={`btn btn-outline-primary rounded-pill ${activeContent === 'item9' ? 'active' : ''}`} onClick={() => handleNavigation('item9')}>
                Go Online
              </Link>
            </div>
          </div>
          <div className="col-md-10 col-sm-12 rounded h-100">
            {/* Render content based on activeContent */}
            {activeContent === 'profile' && <h2>Profile</h2>}
            {activeContent === 'profile_update' && <AdminProfile />}
            {activeContent === 'item2' && <AdminAssignment />}
            {activeContent === 'item3' && <AddAttendanceForUser />}
            {activeContent === 'item4' && <div>Exam</div>}
            {activeContent === 'item5' && <Syllabus />}
            {activeContent === 'item6' && <div>Go Online</div>}
            {activeContent === 'item6' && <div>Quiz</div>}
            {activeContent === 'item7' && <div>Course Schedule</div>}
            {activeContent === 'item8' && <div>Feedback Complain</div>}
            {activeContent === 'item9' && <div>Go Online</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
