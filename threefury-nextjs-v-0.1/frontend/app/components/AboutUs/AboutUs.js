"use client";
import "./AboutUs.css";
import "../../styles/MyHome.css";
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
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import techyBoy from "../../assets/techy-boy.png";
import Image from "next/image";
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });
// import Srinj33 from '../../../assets/srinjay.png'
//import { height, width } from '@mui/system';
// import Shub0924 from '../../../assets/Shubhjeet.png'
// import mycode247 from '../../../assets/Tanmoy.png'
// const imageLoader = ({ src, width, quality }) => {
//   return `https://res.cloudinary.com/dh6pohbrn/image/upload/v1692116130/${src}?w=${width}&q=${quality || 75}`
// }


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
                  className="btn-hover-1-copy color-1"
                >
                  learn more
                </button>
              </div>
              <div className="col-lg-6">
                <div className="mt-5 mt-md-0 ms-lg-5 pt-4 mt-lg-0 pt-lg-0 swing img-fluid custom-img">
                  <Image
                    //loader={imageLoader}
                    src="techy-boy_nqxnxe.png"
                    alt=""
                    width={391.5}
                    height={260.812}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sections">
          <div className="container">
            <h2>Our services</h2>
            <p className="mb-5">
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
                  <h4 className="service-heading">SEO & Digital Marketing</h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="process-wrapp">
                  <span className="pro-step pink">
                    <FontAwesomeIcon icon={faVideo} />
                  </span>
                  <h4 className="service-heading">
                    Video Editing & Graphic Design
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sections">
          <div className="container">
            <div className="row">
              <div className="owl-carousel-part">
                <OwlCarousel {...options}>
                  <div className="col-6 col-md-5">
                    <img
                      alt=""
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                    />
                  </div>
                  <div className="col-6 col-md-5">
                    <img
                      alt=""
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                    />
                  </div>
                  <div className="col-6 col-md-5">
                    <img
                      alt=""
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                    />
                  </div>
                  <div className="col-6 col-md-5">
                    <img
                      alt=""
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"
                    />
                  </div>
                  <div className="col-6 col-md-5">
                    <img
                      alt=""
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                    />
                  </div>
                  <div className="col-6 col-md-5">
                    <img
                      alt=""
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original-wordmark.svg"
                    />
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
