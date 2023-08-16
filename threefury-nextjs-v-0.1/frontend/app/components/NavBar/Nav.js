"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../../assets/logoF.png";
import "font-awesome/css/font-awesome.min.css";
import "../../styles/MyHome.css";
// import Home from './pages/Home';
// import AboutUs from './pages/AboutUs/AboutUs';
import Image from "next/image";
import Link from "next/link";
// const imageLoader = ({ src, width, quality }) => {
//   return `https://res.cloudinary.com/dh6pohbrn/image/upload/v1692116130/${src}?w=${width}&q=${
//     quality || 75
//   }`;
// };

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const handleVisibility = () => {
    setVisible(true);
  };

  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg fixed-top style-sec">
          <div className="container-fluid">
            <a className="me-5" href="#">
              <Image
                //loader={imageLoader}
                src="logoF_xhvusz.png"
                width={180}
                height={50}
                alt="Picture of the author"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </a>
            <button
              onClick={handleVisibility}
              className="navbar-toggler ms-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${
                visible ? "show" : "hide"
              }`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto cursorSet">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    onClick={() => {
                      window.location.replace("/#home");
                      setVisible(false);
                    }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      window.location.replace("/#ourWork");
                      setVisible(false);
                    }}
                  >
                    Our Work
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      window.location.replace("/#about");
                      setVisible(false);
                    }}
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      window.location.replace("/#blog");
                      setVisible(false);
                    }}
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      window.location.replace("/#modal-contact-form-data");
                      setVisible(false);
                    }}
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      window.location.replace("/#modal-contact-form-data");
                      setVisible(false);
                    }}
                    className="mt-md-2 ms-md-3 btn-hover-1-copy color-1"
                    href="12"
                  >
                    <span>Get a Quote</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
