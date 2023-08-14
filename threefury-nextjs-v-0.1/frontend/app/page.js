'use client';
import Home from "./home/page";
import './styles/MyHome.css'
import ReactWhatsappButton from "react-whatsapp-button";

const Page = () => {
  return (
      <div className="App">
        <Home/>
        <ReactWhatsappButton
        countryCode="91"
        phoneNumber="9733773174"
        animated
        style={{
          right: "unset",
          left: "10px",
      }}
      />
      </div> 
  );
};

export default Page;