import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import StudentHome from '../components/StudentPages/StudentHome';
import TeacherHome from '../components/TeacherPages/TeacherHome';
import AdminHome from '../components/AdminPages/AdminHome';
import StaffHome from '../components/StaffPages/StaffHome';
import LoginPage from './LoginPage';

function LoginRedirect() {
  const [userRole, setUserRole] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user's login status

  // Function to handle successful login
  const handleLogin = (role) => {
    setUserRole(role);
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setUserRole(null);
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {/* Routes for different user roles */}
      <Route path="/login">
        {isLoggedIn ? <Redirect to="/" /> : <LoginPage onLogin={handleLogin} />}
      </Route>
      <Route path="/">
        {isLoggedIn ? (
          // Render home page based on user's role
          <>
            {userRole === 'student' && <StudentHome onLogout={handleLogout} />}
            {userRole === 'teacher' && <TeacherHome onLogout={handleLogout} />}
            {userRole === 'admin' && <AdminHome onLogout={handleLogout} />}
            {userRole === 'staff' && <StaffHome onLogout={handleLogout} />}
          </>
        ) : (
          // Redirect to login if user is not logged in
          <Redirect to="/login" />
        )}
      </Route>
    </Router>
  );
}

export default LoginRedirect;
