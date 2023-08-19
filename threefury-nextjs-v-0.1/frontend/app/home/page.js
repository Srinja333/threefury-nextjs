"use client"; 
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Nav from "../components/NavBar/Nav";
// import Navigation from "../../navbar";
import {REACT_APP_API,REACT_APP_PUBLIC_KEY, REACT_APP_SERVICE_ID,REACT_APP_CUSTOMER_TEMPLATE_ID} from './constants'
import icon from "../assets/contact-us-customer-support-concept-vector_prev_ui.png";
import BlogHome from "../blogHome/page";
import AboutUs from "../components/AboutUs/AboutUs";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer/Footer";
import OurProjects from "../components/OurProject/OurProject";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
// import './MyHome.css'
//import { text } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
//import { useRouter } from 'next/navigation'
// const imageLoader = ({ src, width, quality }) => {
//   return `https://res.cloudinary.com/dh6pohbrn/image/upload/v1692116130/${src}?w=${width}&q=${quality || 75}`
// }

function Home() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [details, setDetails] = useState("");
 // const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");
  //const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const timeout = 3000;
  const API = REACT_APP_API;
  //const router = useRouter();
  //console.log("home",router)
  // useEffect(()=>{
  //  router.push('/')
  // },[])
  useEffect(() => emailjs.init(REACT_APP_PUBLIC_KEY), []);

  useEffect(() => {
    if (loading == false && visible === true) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, timeout);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [loading]);

  const handleInput = (e) => {
    if (e.target.name === "quoteName") {
      setName(e.target.value);
    }else if (e.target.name === "userEmail") {
      setEmail(e.target.value);
    } else if (e.target.name === "userContact") {
      setContact(e.target.value);
    } else if (e.target.name === "userDetails") {
      setDetails(e.target.value);
    } else if (e.target.name === "userMessage") {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = async () => {
    const serviceId = REACT_APP_SERVICE_ID;
    const customerTemplateId = REACT_APP_CUSTOMER_TEMPLATE_ID;
    try {
      setLoading(true);
      await emailjs.send(serviceId, customerTemplateId, {
        Name: name,
        Email: email,
        Contact: contact,
        Details: details,
        Message: message,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setVisible(true);
    }
  };

  const handleSendMessage = async () => {
    try {
      if (
        name === "" ||
        contact === "" ||
        message === "" ||
        email === "" ||
        details === ""
      ) {
        alert("please fill all fields");
        return;
      }
      const response = await fetch(`${API}/projectDetails/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: name,
          user_email: email,
          user_contact: contact,
          user_details: details,
          user_explaination: message,
        }),
      });
      const result = await response.json();
      console.log("rrr", result);
      if (result) {
        await handleSubmit();

        setName("");
        setDetails("");
        // setCompanyName("");
        setContact("");
        setEmail("");
        setMessage("");
        //setType("");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div style={{overflowX:"hidden"}}>
      <div>
        <Nav />
      </div>
      <div id="home" className="content">
      <div className="container-heading-hero" >
            <h6 className="title-heading"> India's Leading <i><b className="dev-title">Web Design</b></i>, <i><b className="dev-title">Development Company</b></i> and </h6>
            <h4 className="title-heading" ><i> <b className="dev-title">Digital Solutions Provider</b></i> </h4>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  {/* <p>
                    <h6 className="title-heading"> India's Leading <i><b className="dev-title">Web Design</b></i>, <i><b className="dev-title">Development Company</b></i> and </h6>
                    <h4 className="title-heading" ><i> <b className="dev-title">Digital Solutions Provider</b></i> </h4> */}
                    <div className="ms-md-3 swing img-fluid ml-6 custom-img">
                    <Image  width={400} height={400}  src='contact-us-customer-support-concept-vector_prev_ui_s9delt.png' alt="lady image" layout="responsive"   />
                    </div>
                  {/* </p> */}
                </div>
                <div className="col-md-6 mb-19">
                  {/* <!--Contact Form--> */}
                  <form className="contact-form formBox" id="modal-contact-form-data">
                    <h3 className="heading mb-4" style={{fontWeight:"700"}}>Book a free consultation </h3>
                    <p>
                    Let's Talk! Our team of experts is ready to hear your vision and craft a custom solution that elevates your online presence
                    </p>
                    <div className="row">
                      {/* <!--Result--> */}
                      <div className="col-12" id="quote_result"></div>

                      {/* <!--Left Column--> */}
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="quote_name"
                            name="quoteName"
                            placeholder="Name"
                            required=""
                            type="text"
                            value={name}
                            onChange={(e) => handleInput(e)}
                          />
                        </div>
                        <div className="form-group">
                          <PhoneInput
                            className="input-phone-number form-control"
                            id="quote_contact"
                            name="userContact"
                            placeholder="Phone number"
                            required=""
                            type="text"
                            defaultCountry="IN"
                            value={contact}
                            onChange={setContact}
                          />
                        </div>
                        {/* <div className="form-group">
                          <input
                            className="form-control"
                            id="quote_type"
                            name="projectType"
                            placeholder="Business Detailes"
                            required=""
                            type="text"
                            value={type}
                            onChange={(e) => handleInput(e)}
                          />
                        </div> */}
                      </div>

                      {/* <!--Right Column--> */}
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control mt-lg-0 mt-md-0 mt-4"
                            id="quote_email"
                            name="userEmail"
                            placeholder="Email"
                            required=""
                            type="email"
                            value={email}
                            onChange={(e) => handleInput(e)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="quote_details"
                            name="userDetails"
                            placeholder="Business Detailes"
                            required=""
                            type="text"
                            value={details}
                            onChange={(e) => handleInput(e)}
                          />
                        </div>
                        {/* <div className="form-group">
                          <input
                            className="form-control"
                            id="quote_company-name"
                            name="quoteCompanyName"
                            placeholder="Company name (optional)"
                            required=""
                            type="text"
                            value={companyName}
                            onChange={(e) => handleInput(e)}
                          />
                        </div> */}
                      </div>

                      {/* <!--Full Column--> */}
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            id="quote_message"
                            name="userMessage"
                            placeholder="Please explain your project in detail."
                            value={message}
                            onChange={(e) => handleInput(e)}
                          ></textarea>
                        </div>
                      </div>

                      {/* <!--Button--> */}
                      <div className="col-md-16">
                        <button
                          type="button"
                          className="btn-hover color-2"
                          onClick={handleSendMessage}
                          disabled={loading}
                        >
                          {loading && (
                            <span className="spinner-grow spinner-grow-sm"></span>
                          )}
                          <span>Send Message</span>
                        </button>
                        {!loading && visible && (
                          <div
                            className={`alert alert-success ${
                              visible ? "show" : "hide"
                            }`}
                            role="alert"
                          >
                            Thank you! Your message has been successfully sent.
                            We will contact you very soon!
                          </div>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     {<AboutUs />}
     {<OurProjects />}
      {<BlogHome />}
      {<Footer />}
    </div>
  );
}

export default Home;