import React from 'react';
import Logo from '../images/aitycplogo.png';
import eduLogo from '../images/eduhubconnectlogo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-tertiary" style={{
      background: 'rgb(197, 237, 244)',
      background: 'linear-gradient(90deg, #acaec1 0%, #9dbdc3 70%)',
      backgroundBlendMode: 'screen'
    }} >

      <Link className="navbar-brand p-2" to="/">
        <img src={eduLogo} style={{ height: '10vh', width: '25vh' }} alt="Logo" height="50" className="d-inline-block align-top" />
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <strong><li className="nav-item ">
            <Link className="nav-link text-dark" to="/">Home</Link>
          </li></strong>
          <strong><li className="nav-item">
            <Link className="nav-link text-dark" to="/login">Log In</Link>
          </li></strong>
          <strong><li className="nav-item">
            <Link className="nav-link text-dark" to="/aboutus">About Us</Link>
          </li></strong>
          <strong><li className="nav-item">
            <Link className="nav-link text-dark" to="/contactus">Contact Us</Link>
          </li></strong>
          <strong><li className="nav-item">
            <Link className="nav-link text-dark" to="/placements">Placements</Link>
          </li></strong>
          {/* <strong><li className="nav-item">
            <Link className="nav-link text-dark" to="/attendence">Attendence</Link>
          </li></strong>
          <strong><li className="nav-item">
            <Link className="nav-link text-dark" to="/addsubject">addsubject</Link>
          </li></strong> */}
        </ul>
      </div>

      <Link className="navbar-brand" to="/">
        <img src={Logo} alt="Logo" style={{ height: '50px', width: 'auto' }} className="d-inline-block align-top" />
      </Link>
    </nav>
  );
}

export default Navbar;
