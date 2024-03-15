import React from 'react';
import Logo from '../images/aitycplogo.png';
import eduLogo from '../images/eduhubconnectlogo.png';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function NavbarShort({ userName, userIcon, onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-tertiary" style={{
      background: 'rgb(197, 237, 244)',
      background: 'linear-gradient(90deg, #acaec1 0%, #9dbdc3 70%)',
      backgroundBlendMode: 'screen'
    }} >

      <Link className="navbar-brand p-2" >
        <img src={eduLogo} style={{ height: '10vh', width: '25vh' }} alt="Logo" height="50" className="d-inline-block align-top" />
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <FaUser className="nav-link" style={{ fontSize: '40px' }} />
          </li>
          <li className="nav-item">
            <span className="nav-link text-dark">{userName}</span>
          </li>
          <Link className="navbar-brand" to='/' >
          <li className="nav-item">
            <button className="nav-link btn btn-link text-dark" onClick={onLogout}>Logout</button>
          </li></Link>
        </ul>
      </div>

      <Link className="navbar-brand" >
        <img src={Logo} alt="Logo" style={{ height: '50px', width: 'auto' }} className="d-inline-block align-top" />
      </Link>
    </nav>
  );
}

export default NavbarShort;
