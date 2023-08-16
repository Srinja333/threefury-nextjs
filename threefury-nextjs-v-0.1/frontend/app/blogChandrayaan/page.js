"use client";
import React, { useEffect } from "react";
import Navigation from "../components/NavBar/Nav";
import "bootstrap/dist/css/bootstrap.css";
import icon from "../assets/chandrayaan.png";
import "../styles/blogs.css";
import ava from "../assets/avatar3.jpg";
import Image from "next/image";
import "../styles/MyHome.css";
// const imageLoader = ({ src, width, quality }) => {
//   return `https://res.cloudinary.com/dh6pohbrn/image/upload/v1692116130/${src}?w=${width}&q=${quality || 75}`
// }
import { useRouter } from 'next/navigation'

function BlogChandrayaan() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    if (window.history && window.history.pushState) {
      $(window).on("popstate", function () {
        //alert('Back button was pressed.');
        //router.refresh()
        window.location.replace("/#blog")
        window.location.reload()
      });
    }
  }

  return (
    <div>
      <div className="App">
        <Navigation />
      </div>
      <div className="blog-single gray-bg">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-8 m-15px-tb">
              <article className="article">
                <div className="article-img">
                  <Image  
                 // loader={imageLoader}
                   src='chandrayaan_k0zgwj.png' height={500} width={800} title="" alt="" />
                </div>
                <div className="article-title">
                  <h2>Chandrayaan 3 Mission</h2>
                </div>
                <div className="article-content">
                 
                    <p>
                      Chandrayaan-3, India’s third lunar exploration mission was
                      launched on Friday, in the fourth operational mission (M4)
                      of the LVM3 launcher, ISRO is crossing new frontiers by
                      demonstrating a soft landing on the lunar surface with its
                      lunar module and demonstrating roving on the lunar
                      terrain. It is expected to be supportive of ISRO’s future
                      interplanetary missions. Additionally, deploying rovers
                      and in-situ scientific experiments will scale new heights
                      in lunar expeditions by deploying Rover. Yes, ISRO is
                      bringing the Moon closer to us.
                   
                    Chandrayaan-3 consists of an indigenous propulsion module, a
                    lander module, and a rover to develop and demonstrate new
                    technologies required for interplanetary missions. The
                    propulsion module will carry the lander and rover from
                    injection to a 100 km lunar orbit. It also carries a
                    Spectropolarimetry (The measurement of the polarization of
                    light at different wavelengths) of Habitable Planetary Earth
                    (SHAPE) payload to study Earth's spectral and polarimetric
                    measurements from the lunar orbit. The main function of the
                    Propulsion Module is to carry the LM from the launch vehicle
                    injection orbit to till Lander separation.
                 </p>
                  <i>
                    <h4>Why did ISRO choose that LVM3-M4?</h4>
                  </i>
                  <p>
                    LVM3 is the operational heavy-lift launch vehicle of ISRO
                    and has a spectacular pedigree of completing 6 consecutive
                    successful missions. This is the 4th operational flight of
                    LVM3, which aims to launch the Chandrayaan-3 spacecraft to
                    Geo Transfer Orbit (GTO). LVM3 has proved its versatility to
                    undertake most complex missions like:
                    <br />
                   
                      • Injecting multi-satellites
                      <br />
                   
                    • Mission planning to ensure safe relative distance among
                    separated satellites through re-orientation and velocity
                    addition maneuvers. Multi orbit (LEO, MEO, CEO) and execute
                    interplanetary missions.
                  </p>
                  • The mission is to provide the best possible service for all
                  users. It will be an integrated system.
                </div>
                <div className="nav tag-cloud">
                  <a href="#">Design</a>
                  <a href="#">ISRO</a>
                  <a href="#">Sapce</a>
                  <a href="#">Chandrayaan 3</a>
                  <a href="#">Moon</a>
                  <a href="#">Science</a>
                </div>
              </article>
            </div>
            <div className="col-lg-4 m-15px-tb blog-aside">
              {/* <!-- Author --> */}
              <div className="widget widget-author">
                <div className="widget-title">
                  <h3>Author</h3>
                </div>
                <div className="widget-body">
                  <div className="media align-items-center">
                    <div className="avatar ms-3">
                      <Image
                      // loader={imageLoader}
                       alt="" width={50} height={50} src='avatar3_owpnjz.jpg'  />
                    </div>
                    <div className="media-body">
                      <h6>
                        Hello, I'm
                        <br /> Emily Villas
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Author -->
                    
                    <!-- widget Tags --> */}
              <div className="widget widget-tags">
                <div className="widget-title">
                  <h3>Latest Tags</h3>
                </div>
                <div className="widget-body">
                  <div className="nav tag-cloud">
                    <a href="#">Design</a>
                    <a href="#">ISRO</a>
                    <a href="#">Sapce</a>
                    <a href="#">Chandrayaan 3</a>
                    <a href="#">Moon</a>
                    <a href="#">Science</a>
                  </div>
                </div>
              </div>
              {/* <!-- End widget Tags --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogChandrayaan;
