'use client';
import Home from "./home/page";
import './styles/MyHome.css'
import ReactWhatsappButton from "react-whatsapp-button";
import { Suspense } from 'react'
import Loader from "./loading";

const Page = () => {
  return (
      <div className="App">
        <Suspense fallback={<Loader/>}>
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
      </Suspense>
      </div> 
  );
};

export default Page;