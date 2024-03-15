import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogInPage from './components/LogInPage';
import StudentRegistration from './components/RoleRegistration';
import AboutPage from './components/AboutPage';
import ContactUs from './components/ContactUsPage';
import Placements from './components/Placements';
import Home from './Pages/Home';
import Attendence from './components/Attendence';
import ScrollToTop from './components/ScrollToTop';
import StudentHome from './components/StudentPages/StudentHome';
import StudentProfile from './components/StudentPages/StudentProfile';
import Syllabus from './components/StudentPages/Syllabus';
import TeacherAssignment from './components/TeacherPages/TeacherAssignment';
import TeacherHome from './components/TeacherPages/TeacherHome';
import TeacherProfile from './components/TeacherPages/TeacherProfile';
import AdminAssignment from './components/AdminPages/AdminAssignment';
import AdminHome from './components/AdminPages/AdminHome';
import AdminProfile from './components/AdminPages/AdminProfile';
import StaffAssignment from './components/StaffPages/StaffAssignment';
import StaffHome from './components/StaffPages/StaffHome';
import StaffProfile from './components/StaffPages/StaffProfile';
import SubjectForm from './components/SubjectForm';


function App() {
  const divStyle = {
    background: 'rgb(254,119,115)',
    background: 'linear-gradient(90deg, rgba(254,119,115,1) 0%, rgba(255,216,216,1) 45%)'
  };
  return (
    <Router>

      <div className="custom-background">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/registration" element={<StudentRegistration />} />
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/attendence" element={<Attendence />} />
          <Route path="/studenthome" element={<StudentHome />} />
          <Route path="/studentprofile" element={<StudentProfile />} />
          <Route path="/Syllabus" element={<Syllabus />} />
          <Route path="/teacherAssignment" element={<TeacherAssignment />} />
          <Route path="/teacherhome" element={<TeacherHome />} />
          <Route path="/teacherprofile" element={<TeacherProfile />} />
          <Route path="/adminassignment" element={<AdminAssignment />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/adminprofile" element={<AdminProfile />} />
          <Route path="/staffassignment" element={<StaffAssignment />} />
          <Route path="/staffhome" element={<StaffHome />} />
          <Route path="/staffprofile" element={<StaffProfile />} />
          <Route path="/addsubject" element={<SubjectForm />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
