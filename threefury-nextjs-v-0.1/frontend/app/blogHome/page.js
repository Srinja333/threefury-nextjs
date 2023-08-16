"use client"; 
import React,{useState} from 'react'
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css';
import image1 from '../assets/blog1.png'
import image2 from '../assets/blog2.png'
import image3 from '../assets/blog3.png'
import ava from '../assets/avatar.jpg'
import ava1 from '../assets/avatar2.jpg'
import ava2 from '../assets/avatar3.jpg'
//import {Link, useNavigate } from 'react-router-dom';
// import Link from "next/link";
import { useRouter } from 'next/navigation'
//import BlogAI from "../../../blogai";


function BlogAIHome() {
   // const [loading, setLoading] = useState(false);
    const router = useRouter();
    const handleClickAI = () => {
        //router.refresh() 
        //setLoading(true)
        router.push('/blogAI')
        //setLoading(false)
        //console.log("rout",router)
    }
    const handleClickChandrayaan=()=>{
        //router.refresh() 
        //setLoading(true)
        router.push('/blogChandrayaan')
        //setLoading(false)
    }
    const handleClickMicroservice=()=>{
        //setLoading(true)
        //router.refresh() 
        router.push('/blogMicroservices')
       // setLoading(false)
    }
   
  return (
    <>
      <section className="bg-light" style={{ marginTop: "8rem" }} id="blog">
        <div className="container">
          {/* <!--Row--> */}
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="heading-area mx-570 pb-lg-5 mb-10">
                <span className="sub-title">We are Threefury</span>
                <h2 className="title mb-0">
                  Our{" "}
                  <span className="alt-color js-rotating">
                    latest blogs,recent news
                  </span>{" "}
                  will keep everyone updated
                </h2>
              </div>
            </div>
          </div>
          {/* <!--Row--> */}
          <div className="row wow fadeInUp">
            {/* <!--News Item--> */}
            <div className="col-lg-4">
              <div className="news-item">
                <Image
                  alt="image"
                  height={215.328}
                  width={323}
                  src="OpenAIBlog_uc1bgk.png"
                />
                <div className="news-text-box">
                  <span className="date main-color">October 29, 2020</span>

                  {/* <Link to='/blog1' target="_blank"> */}
                  <h4 className="news-title">Open AI vs Software Engineer</h4>
                  {/* </Link> */}

                  <p className="para">
                    OpenAI is a research organization that focuses on the
                    development of artificial intelligence...
                  </p>
                  <a className="author d-flex align-items-center">
                    <Image
                      // loader={imageLoader}
                      width={50}
                      height={50}
                      src="avatar_ijksse.jpg"
                      title=""
                      alt=""
                    />
                    <h5 className="author-name">Hena Sword</h5>
                  </a>
                  <button
                    className="effect effect-1"
                    onClick={(e) => handleClickAI()}
                  >
                     {/* {loading && (
                      <span className="spinner-grow spinner-grow-sm"></span>
                    )} */}
                    <span> Learn more</span>
                  </button>
                  {/* <Link href='/blogAI'>learn</Link> */}
                </div>
              </div>
            </div>
            {/* <!--News Item--> */}
            <div className="col-lg-4">
              <div className="news-item">
                <Image
                  alt="image"
                  height={215.328}
                  width={323}
                  src="blog2_jvzqt8.png"
                />
                <div className="news-text-box">
                  <span className="date main-color">October 29, 2020</span>
                  <h4 className="news-title">Top 10 Microservices Design</h4>
                  <p className="para">
                    The developers should know what Microservice is and why the
                    Microservice architecture arises...
                  </p>
                  <a className="author d-flex align-items-center">
                    <Image
                      //loader={imageLoader}
                      width={50}
                      height={50}
                      src="avatar2_qzaacp.jpg"
                      title=""
                      alt=""
                    />
                    <h5 className="author-name">Charlotte Kemi</h5>
                  </a>
                  <button
                    className="effect effect-1"
                    onClick={(e) => handleClickMicroservice()}
                  >
                    {/* {loading && (
                      <span className="spinner-grow spinner-grow-sm"></span>
                    )} */}
                    <span> Learn more</span>
                  </button>
                </div>
              </div>
            </div>
            {/* <!--News Item--> */}
            <div className="col-lg-4">
              <div className="news-item">
                <Image
                  alt="image"
                  height={215.328}
                  width={323}
                  src="blog3_grb9ao.webp"
                />
                <div className="news-text-box">
                  <span className="date main-color">October 29, 2020</span>
                  <h4 className="news-title">Chandrayaan 3 Mission Blog</h4>
                  <p className="para">
                    Chandrayaan-3, India’s third lunar exploration mission was
                    launched on Friday, in the fourth...
                  </p>
                  <a className="author d-flex align-items-center">
                    <Image
                      // loader={imageLoader}
                      alt=""
                      width={50}
                      height={50}
                      src="avatar3_owpnjz.jpg"
                    />
                    <h5 className="author-name">Emily Villas</h5>
                  </a>
                  <button
                    className="effect effect-1"
                    onClick={(e) => handleClickChandrayaan()}
                  >
                      {/* {loading && (
                      <span className="spinner-grow spinner-grow-sm"></span>
                    )} */}
                    <span> Learn more</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogAIHome
