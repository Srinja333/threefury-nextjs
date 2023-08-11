import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css';
import logo from './logoF.png';

const Footer = () => {
  return (
    <div className='container'>
        <div className="footer-div">
            <h1>Get started with ThreeFury</h1>
            <p>Book a free consultancy, let's your business take to a next step!</p>
            <button className="btn btn-outline-light" onClick={() => window.location.replace("/#modal-contact-form-data")}>Get Started</button>
        </div>
        <div className="foot-sec ">
            <div className="footer-ogo">
                <img src={logo} className='logo-img' alt="ThreeFury" />
                <p>Our vision is to grow your business digitally!</p>
                <div className='foot-icon'>
               <a target="_blank" href="https://www.facebook.com/profile.php?id=100095408325331&mibextid=ZbWKwL"><FacebookIcon className='footer-icon'/></a>
               <a target="_blank" href="https://www.linkedin.com/company/threefury/?viewAsMember=true"> <LinkedInIcon className='footer-icon'/></a>
               {/* <InstagramIcon className='footer-icon'/>*/}
           
               <a  target="_blank" href="mailto:info@threefury.com"> <EmailIcon className='footer-icon'/></a>
                </div>
            </div>
        </div>
        <p>Copyright © 2023 www.threefury.com</p>
    </div>
  )
}

export default Footer;