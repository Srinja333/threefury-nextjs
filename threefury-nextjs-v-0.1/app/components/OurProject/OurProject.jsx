import React from 'react';
import './OurProject.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import pic1 from './projects/project1.webp';
import pic2 from './projects/project2.png';
import pic3 from './projects/projectS1.jpeg';
import pic4 from './projects/projectS2.jpeg';
import pic5 from './projects/projectT1.png';
import pic6 from './projects/projectT2.png';


const OurProject = () => {
  return (
    <div className='container' id='ourWork'>
        <div className="container col-md-6 lm-3 textS textH">
            <h1 className='textH'>We have <span className='text-color'>developed</span> some <br /> great <span className='text-color'>projects</span></h1>
            <p>We've proudly crafted innovative projects in web design, leveraging AWS cloud services for scalability and efficiency, while also harnessing the power of Python and C for robust functionality and performance.</p>
        </div>
        <div className='container col-lg-8'>
            <div id="carouselExampleCaptions" className=" carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div className="ttext carousel-inner">
                    <div className="carousel-item active">
                        <img src={pic1} className="d-block w-100" alt="" />
                        <div className="carousel-caption d-md-block t_color">
                            <h5>College website</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic2} className="d-block w-100" alt="" />
                        <div className="carousel-caption  d-md-block t_color">
                            <h5>Learning Management System</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic3} className="d-block w-100" alt="" />
                        <div className="carousel-caption  d-md-block t_color">
                            <h5>Ecommerce book store</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic4} className="d-block w-100" alt="" />
                        <div className="carousel-caption  d-md-block t_color">
                            <h5>Live Chat app</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic5} className="d-block w-100" alt="" />
                        <div className="carousel-caption  d-md-block t_color">
                            <h5>Travel Website</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic6} className="d-block w-100" alt="" />
                        <div className="carousel-caption  d-md-block t_color">
                            <h5>Fashion Website</h5>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>    
    </div>
  )
}

export default OurProject;