import React from "react";
import "./AboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCog,
  faEdit,
  // faAndroid,
  faMagnifyingGlassChart,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faLinkedin, 
  faGithub,
  faAndroid
} from '@fortawesome/free-brands-svg-icons'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import techyBoy from "../../../assets/techy-boy.avif";
import Srinj33 from '../../../assets/srinjay.png'
import { height, width } from '@mui/system';
import Shub0924 from '../../../assets/Shubhjeet.png'
import mycode247 from '../../../assets/Tanmoy.png'
  

function AboutUs() {
  const options = {
    items: 3, // Number of items displayed in the carousel
    loop: true, // Infinite loop
    //nav: true, // Show navigation buttons
    //dots: true, // Show dots for pagination
    autoplay: true,
    autoplayTimeout: 3000,
  };
  return (
    <>
      <div id="about">
        <section className="pb-0">
          <div className="container">
            <div className="row d-flex ms-lg-5">
              <div className="col-lg-6">
                <span className="sub-title">We are ThreeFury company</span>
                <h2>We are filling needs of our customers</h2>
                <p className="para">
                  We listen intently to your aspirations, dissect your
                  challenges, and create tailored strategies that make your
                  brand shine in the digital realm. With each project, we become
                  your trusted partners, pouring creativity, expertise, and
                  ingenuity into every line of code. Elevate your online
                  presence with ThreeFury - where needs are met, visions are
                  realized, and businesses thrive in the digital age.
                </p>
                <button
                  onClick={() =>
                    window.location.replace("/#modal-contact-form-data")
                  }
                  className="btn btn-hover-1-copy color-1"
                >
                  learn more
                </button>
              </div>
              <div className="col-lg-6">
                <div className="ms-lg-5 pt-4 mt-lg-0 pt-lg-0">
                  <img style={{ width: "90%", height: "50%" }} src={techyBoy} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ marginTop: "8rem", marginBottom: "8rem" }}>
          <div className="container">
            <h2>Our services</h2>
            <p className="para mb-5">
              We offer various services to our clients which helps their
              business to grow online.
            </p>
            <div className="row">
              <div className="col-md-3">
                <div className="process-wrapp">
                  <span className="pro-step midnight">
                    <FontAwesomeIcon icon={faCode} />
                  </span>
                  <h4 className="service-heading">Web Development</h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="process-wrapp">
                  <span className="pro-step green">
                    <FontAwesomeIcon icon={faAndroid} />
                  </span>
                  <h4 className="service-heading">Mobile App Development</h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="process-wrapp">
                  <span className="pro-step purple">
                    <FontAwesomeIcon icon={faMagnifyingGlassChart} />
                  </span>
                  <h4 className="service-heading">SEO And Digital Marketing</h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="process-wrapp">
                  <span className="pro-step pink">
                    <FontAwesomeIcon icon={faVideo} />
                  </span>
                  <h4 className="service-heading">
                    Video Editing And Graphic Design
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="text-center mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="heading-area mx-570 mb-5">
                  <span className="sub-title">We are techfury company</span>
                  <h2 className="title">We have some talented staff</h2>
                  <p className="para">
                  Our dynamic team combines top-notch frontend, backend, and design skills,<br/> 
                  collaborating seamlessly to create cutting-edge digital solutions with a perfect blend of functionality, 
                  aesthetics, and user experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="team-item">
                  <img
                    alt="image"
                    className="team-image"
                    src={Srinj33}
                  />
                  <div className="name">
                    <h6>Srinjay Kapri</h6>
                  </div>

                <p className="designation mb-2">Director</p>
                <a href='https://www.facebook.com/profile.php?id=100016105536565' target='_blank'>
                <FontAwesomeIcon icon={faFacebook} /></a>
                <a href='https://www.linkedin.com/in/srinjaykapri/' target='_blank'>
                 <FontAwesomeIcon className="ms-2  me-2" icon={faLinkedin} /></a>
                 <a href='https://github.com/srinja333' target='_blank'>
                 <FontAwesomeIcon icon={faGithub} /></a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-item">
                <img
                  alt="image"
                  className="team-image"
                  src={mycode247}
                />
                <div className="name">
                  <h6>Tanmoy Khanta</h6>
                </div>
                <p className="designation mb-2">Director</p>
                <div className="team-social social-icon-bg-hvr">
                <a href='https://www.facebook.com/tanmoy.khanta.3?mibextid=ZbWKwL' target='_blank'>  
                <FontAwesomeIcon icon={faFacebook}/></a>
                <a href='https://www.linkedin.com/in/tanmoy-khanta/' target='_blank'> 
                 <FontAwesomeIcon className="ms-2  me-2" icon={faLinkedin} /></a>
                 <a href='https://github.com/mycode247' target='_blank'> 
                 <FontAwesomeIcon icon={faGithub} /></a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-item">
                <img
                  alt="image"
                  className="team-image"
                  src={Shub0924}
                />
                <div className="name">
                  <h6>Shubhjeet Paul</h6>
                </div>
                <p className="designation mb-2">Director</p>
                <div className="social-icon-bg-hvr">
                <a href='https://www.facebook.com/shubhjeet.paulom/' target='_blank'>
                <FontAwesomeIcon icon={faFacebook} /></a>
                <a href='https://www.linkedin.com/in/shubhjeet-paul/' target='_blank'>
                 <FontAwesomeIcon className="ms-2  me-2" icon={faLinkedin}/></a>
                 <a href='https://github.com/SHUBH0924' target='_blank'>
                 <FontAwesomeIcon icon={faGithub} href=''/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
        <section style={{ marginTop: "8rem", marginBottom: "8rem" }}>
          <div className="container">
            <div className="row">
              <div
                className="col-md-12"
                style={{
                  marginLeft: "13%",
                }}
              >
                <OwlCarousel {...options}>
                  <div className="owlItem">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                  </div>
                  <div className="owlItem">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                  </div>
                  <div className="owlItem">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
                  </div>
                  <div className="owlItem">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" />
                  </div>
                  <div className="owlItem">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                  </div>
                  <div className="owlItem">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original-wordmark.svg" />
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutUs;
