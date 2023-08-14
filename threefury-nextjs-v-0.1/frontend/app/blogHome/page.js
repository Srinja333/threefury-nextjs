"use client"; 
// import React from 'react'
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
    const router = useRouter();
    const handleClickAI = () => {
        router.push('/blogAI')
    }
    const handleClickChandrayaan=()=>{
        router.push('/blogChandrayaan')
    }
    const handleClickMicroservice=()=>{
        router.push('/blogMicroservices')
    }
   
  return (
    <>
        <section className="bg-light" style={{marginTop:"8rem"}} id="blog">
    <div className="container">
       {/* <!--Row--> */}
        <div className="row">
            <div className="col-md-12 text-center">
                <div className="heading-area mx-570 pb-lg-5 mb-10">
                    <span className="sub-title">We are Threefury</span>
                    <h2 className="title mb-0">Our <span className="alt-color js-rotating">latest blogs,recent news</span> will
                        keep
                        everyone updated</h2>
                </div>
            </div>
        </div>
        {/* <!--Row--> */} 
        <div className="row wow fadeInUp">
         {/* <!--News Item--> */} 
            <div className="col-lg-4">
                <div className="news-item">
                    <Image alt="image" height={215.328} width={323} src={image1} />
                    <div className="news-text-box">
                        <span className="date main-color">October 29, 2020</span>
                        
                        {/* <Link to='/blog1' target="_blank"> */}
                        <h4 className="news-title">Open AI vs Software Engineer</h4>
                        {/* </Link> */}
                        
                        
                        <p className="para">OpenAI is a research organization that focuses on the development of artificial intelligence...</p>
                        <a className="author d-flex align-items-center" href="javascript:void(0);">
                            <Image alt="image" className="bg-blue" height={55} width={50} src={ava}/>
                            <h5 className="author-name">Hena Sword</h5>
                        </a>
                        <button className='effect effect-1' onClick={(e)=>handleClickAI()}> Learn more </button>
                        {/* <Link href='/blogAI'>learn</Link> */}
                    </div>
                </div>
            </div>
            {/* <!--News Item--> */}
            <div className="col-lg-4">
                <div className="news-item">
                    <Image alt="image" height={215.328} width={323} src={image2} />
                    <div className="news-text-box">
                        <span className="date main-color">October 29, 2020</span>
                        <h4 className="news-title">Top 10 Microservices Design</h4>
                        <p className="para">The developers should know what Microservice is and why the Microservice architecture arises...</p>
                        <a className="author d-flex align-items-center" href="javascript:void(0);">
                            <Image alt="image" height={55} width={50}className="bg-purple" src={ava1}/>
                            <h5 className="author-name">Charlotte Kemi</h5>
                        </a>
                        <button className='effect effect-1' onClick={(e)=>handleClickMicroservice()}> Learn more </button>
                    </div>
                </div>
            </div>
            {/* <!--News Item--> */}
            <div className="col-lg-4">
                <div className="news-item">
                    <Image alt="image" height={215.328} width={323} src={image3}/>
                    <div className="news-text-box">
                        <span className="date main-color">October 29, 2020</span>
                        <h4 className="news-title">Chandrayaan 3 Mission Blog</h4>
                        <p className="para">Chandrayaan-3, India’s third lunar exploration mission was launched on Friday, in the fourth...</p>
                        <a className="author d-flex align-items-center" href="javascript:void(0);">
                            <Image height={55} width={50} alt="image" className="bg-pink" src={ava2}/>
                            <h5 className="author-name">Emily Villas</h5>
                        </a>
                        <button className='effect effect-1' onClick={(e)=>handleClickChandrayaan()}> Learn more </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default BlogAIHome
