import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/logoF.png';
import 'font-awesome/css/font-awesome.min.css';
import home from './pages/Home/MyHome';
import AboutUs from './pages/AboutUs/AboutUs';

function navbar() {
  return (
    <div className='container'>
    <nav className="navbar navbar-expand-lg fixed-top style-sec">
<div className="container-fluid">
<a className="navbar-brand" href="#">
  <img className="logo-img" src={logo} alt="..." height="100"/>
</a>
<button className="navbar-toggler" style={{marginLeft:"8rem"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav ms-auto cursorSet">
    <li className="nav-item">
      <a className="nav-link" aria-current="page" onClick={() => window.location.replace("/#home")}>Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" onClick={() => window.location.replace("/#ourWork")}>Our Work</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" onClick={() => window.location.replace("/#about")}>About Us</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" onClick={() => window.location.replace("/#blog")}>Blog</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" onClick={() => window.location.replace("/#modal-contact-form-data")} href="#">Contact Us</a>
    </li>
    <li>
    <button type="button" onClick={() => window.location.replace("/#modal-contact-form-data")} className="btn btn-hover-1-copy color-1" href="12"><span>Get a Quote</span></button></li>  
</ul>
</div>
</div>
</nav>
</div>
  )
}

export default navbar
